import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Input, Button, Modal, Form, message, Pagination } from 'antd';
import { FaCheck, FaTimes, FaEye, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Organizers = () => {
  const [activeTab, setActiveTab] = useState('verified');
  const [verifiedOrganizers, setVerifiedOrganizers] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingOrganizerId, setEditingOrganizerId] = useState(null);
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);
  const [showRevertModal, setShowRevertModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [addForm] = Form.useForm();

  useEffect(() => {
    fetchOrganizers();
  }, []);

  const fetchOrganizers = async () => {
    try {
      setLoading(true);
      const [verifiedRes, pendingRes] = await Promise.all([
        axios.get('/api/organizers/verified'),
        axios.get('/api/organizers/requests')
      ]);
      setVerifiedOrganizers(verifiedRes.data);
      setPendingRequests(pendingRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (userId) => {
    try {
      await axios.put(`/api/organizers/status/${userId}`, {
        roles: ['player', 'organizer'],
        isVerifiedOrganizer: true,
        organizerRequest: { status: 'approved' }
      });
      message.success('Organizer approved!');
      fetchOrganizers();
    } catch {
      message.error('Failed to approve.');
    }
  };

  const handleReject = async (userId) => {
    try {
      await axios.put(`/api/users/${userId}`, { organizerRequest: { status: 'rejected' } });
      message.warning('Organizer request rejected.');
      fetchOrganizers();
    } catch {
      message.error('Failed to reject.');
    }
  };

  const handleEdit = (organizer) => {
    addForm.setFieldsValue({
      firstName: organizer.firstName,
      lastName: organizer.lastName,
      email: organizer.email,
      username: organizer.username,
      birthDate: organizer.birthDate?.substring(0, 10)
    });
    setEditingOrganizerId(organizer._id);
    setShowAddModal(true);
  };

  const handleRevertConfirmed = async () => {
    if (!selectedOrganizer) return;
    try {
      await axios.put(`/api/organizers/revert/${selectedOrganizer._id}`);
      message.success('Organizer reverted to player successfully!');
      setShowRevertModal(false);
      fetchOrganizers();
    } catch {
      message.error('Failed to revert organizer.');
    }
  };

  const openAttachmentModal = (attachment) => {
    setSelectedAttachment(attachment);
    setAttachmentModal(true);
  };

  const filteredVerified = verifiedOrganizers.filter(o =>
    `${o.firstName} ${o.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPending = pendingRequests.filter(o =>
    `${o.firstName} ${o.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const data = activeTab === 'verified' ? filteredVerified : filteredPending;

  return (
    <div className="app">
      <Sidebar />
      <section id="content" className="players-content">
        <Navbar />
        <main className="p-6 max-w-screen-lg mx-auto">
          {/* Header + Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <h1 className="text-3xl font-extrabold text-nuBlue">Organizers</h1>
            <div className="flex items-center gap-4">
              <Input
                placeholder="Search organizers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input rounded-lg shadow-sm"
                style={{ minWidth: '250px', padding: '10px 16px', fontSize: '16px' }}
                allowClear
              />
              {activeTab === 'verified' && (
                <Button
                  type="primary"
                  icon={<FaPlus />}
                  className="bg-nuBlue text-white"
                  onClick={() => setShowAddModal(true)}
                >
                  Add Organizer
                </Button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded ${activeTab === 'verified' ? 'bg-nuBlue text-green' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('verified')}
            >
              Verified Organizers
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === 'pending' ? 'bg-nuBlue text-green' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('pending')}
            >
              Pending Requests
            </button>
          </div>

          {/* Table */}
          {loading ? (
            <div className="text-center py-10 text-lg">Loading...</div>
          ) : (
            <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
              <table className="min-w-full bg-white rounded-lg table-auto">
                <thead className={activeTab === 'verified' ? 'bg-nuBlue text-white' : 'bg-yellow-500 text-white'}>
                  <tr>
                    <th className="py-4 px-8 text-left">Name</th>
                    <th className="py-4 px-8 text-left">Email</th>
                    {activeTab === 'pending' && <th className="py-4 px-8 text-left">Attachment</th>}
                    <th className="py-4 px-8 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length === 0 ? (
                    <tr>
                      <td colSpan={activeTab === 'pending' ? 4 : 3} className="text-center py-10 text-gray-500">
                        No {activeTab} organizers.
                      </td>
                    </tr>
                  ) : (
                    data.map(o => (
                      <tr key={o._id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-8">{o.firstName} {o.lastName}</td>
                        <td className="py-4 px-8">{o.email}</td>
                        {activeTab === 'pending' && (
                          <td className="py-4 px-8">
                            {o.organizerRequest?.attachment ? (
                              <Button icon={<FaEye />} onClick={() => openAttachmentModal(o.organizerRequest.attachment)}>
                                View
                              </Button>
                            ) : 'No file'}
                          </td>
                        )}
                        <td className="py-4 px-8 flex gap-2">
                          {activeTab === 'verified' ? (
                            <>
                              <Button icon={<FaEdit />} onClick={() => handleEdit(o)}>Edit</Button>
                              <Button danger icon={<FaTrash />} onClick={() => { setSelectedOrganizer(o); setShowRevertModal(true); }}>
                                Revert
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button type="primary" icon={<FaCheck />} className="bg-green-600 text-white" onClick={() => handleApprove(o._id)}>Approve</Button>
                              <Button danger icon={<FaTimes />} onClick={() => handleReject(o._id)}>Reject</Button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Modals */}
          <Modal title="Attachment" open={attachmentModal} onCancel={() => setAttachmentModal(false)} footer={null}>
            {selectedAttachment?.endsWith('.pdf') ? (
              <embed src={selectedAttachment} width="100%" height="500px" type="application/pdf" />
            ) : <img src={selectedAttachment} alt="Attachment" className="w-full" />}
          </Modal>

          <Modal
            title={editingOrganizerId ? "Edit Organizer" : "Add Organizer"}
            open={showAddModal}
            onCancel={() => { setShowAddModal(false); addForm.resetFields(); setEditingOrganizerId(null); }}
            onOk={() => addForm.submit()}
            okText={editingOrganizerId ? "Update" : "Add"}
          >
            <Form layout="vertical" form={addForm} onFinish={async (values) => {
              try {
                if (editingOrganizerId) {
                  await axios.put(`/api/users/${editingOrganizerId}`, values);
                  message.success('Organizer updated successfully!');
                } else {
                  await axios.post('/api/organizers', { ...values, roles: ['organizer'], isVerifiedOrganizer: true });
                  message.success('Organizer added successfully!');
                }
                setShowAddModal(false); addForm.resetFields(); setEditingOrganizerId(null); fetchOrganizers();
              } catch {
                message.error('Failed to save organizer.');
              }
            }}>
              <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}><Input /></Form.Item>
              <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}><Input /></Form.Item>
              <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}><Input /></Form.Item>
              <Form.Item label="Username" name="username" rules={[{ required: true }]}><Input /></Form.Item>
              <Form.Item label="Birthdate" name="birthDate" rules={[{ required: true }]}><Input type="date" /></Form.Item>
              {!editingOrganizerId && <Form.Item label="Password" name="password" rules={[{ required: true }]}><Input.Password /></Form.Item>}
            </Form>
          </Modal>

          <Modal
            title="Revert Organizer to Player"
            open={showRevertModal}
            onCancel={() => setShowRevertModal(false)}
            onOk={handleRevertConfirmed}
            okText="Revert"
            cancelText="Cancel"
          >
            <p>Are you sure you want to revert <strong>{selectedOrganizer?.firstName} {selectedOrganizer?.lastName}</strong> to player?</p>
          </Modal>
        </main>
      </section>
    </div>
  );
};

export default Organizers;
