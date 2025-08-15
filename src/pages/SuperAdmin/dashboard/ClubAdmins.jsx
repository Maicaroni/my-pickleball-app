import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Input, Button, Modal, Form, message, Pagination } from 'antd';
import { FaCheck, FaTimes, FaEye, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const ClubAdmins = () => {
  const [activeTab, setActiveTab] = useState('verified');
  const [verifiedAdmins, setVerifiedAdmins] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingAdminId, setEditingAdminId] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [showRevertModal, setShowRevertModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [addForm] = Form.useForm();

  useEffect(() => {
    fetchClubAdmins();
  }, []);

  const fetchClubAdmins = async () => {
    try {
      setLoading(true);
      const [verifiedRes, pendingRes] = await Promise.all([
        axios.get('/api/clubAdmins/verified'),
        axios.get('/api/clubAdmins/requests')
      ]);
      setVerifiedAdmins(verifiedRes.data);
      setPendingRequests(pendingRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (userId) => {
    try {
      await axios.put(`/api/clubAdmins/status/${userId}`, {
        roles: ['player', 'clubadmin'],
        isVerifiedClubAdmin: true,
        clubAdminRequest: { status: 'approved' }
      });
      message.success('Club admin approved!');
      fetchClubAdmins();
    } catch {
      message.error('Failed to approve.');
    }
  };

  const handleReject = async (userId) => {
    try {
      await axios.put(`/api/users/${userId}`, { clubAdminRequest: { status: 'rejected' } });
      message.warning('Club admin request rejected.');
      fetchClubAdmins();
    } catch {
      message.error('Failed to reject.');
    }
  };

  const handleEdit = (admin) => {
    addForm.setFieldsValue({
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email,
      username: admin.username,
      birthDate: admin.birthDate?.substring(0, 10)
    });
    setEditingAdminId(admin._id);
    setShowAddModal(true);
  };

  const handleRevertConfirmed = async () => {
    if (!selectedAdmin) return;
    try {
      await axios.put(`/api/clubAdmins/revert/${selectedAdmin._id}`);
      message.success('Reverted to player successfully!');
      setShowRevertModal(false);
      fetchClubAdmins();
    } catch {
      message.error('Failed to revert.');
    }
  };

  const openAttachmentModal = (attachment) => {
    setSelectedAttachment(attachment);
    setAttachmentModal(true);
  };

  const filteredVerified = verifiedAdmins.filter(a =>
    `${a.firstName} ${a.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPending = pendingRequests.filter(a =>
    `${a.firstName} ${a.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const data = activeTab === 'verified' ? filteredVerified : filteredPending;
  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="app">
      <Sidebar />
      <section id="content" className="players-content">
        <Navbar />
        <main className="p-6 max-w-screen-lg mx-auto">
          {/* Header + Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <h1 className="text-3xl font-extrabold text-nuBlue">Club Admins</h1>
            <div className="flex items-center gap-4">
              <Input
                placeholder="Search club admins..."
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
                  Add Club Admin
                </Button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded ${activeTab === 'verified' ? 'bg-nuBlue text-green' : 'bg-gray-200'}`}
              onClick={() => { setActiveTab('verified'); setCurrentPage(1); }}
            >
              Verified
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === 'pending' ? 'bg-nuBlue text-green' : 'bg-gray-200'}`}
              onClick={() => { setActiveTab('pending'); setCurrentPage(1); }}
            >
              Pending
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
                  {paginatedData.length === 0 ? (
                    <tr>
                      <td colSpan={activeTab === 'pending' ? 4 : 3} className="text-center py-10 text-gray-500">
                        No {activeTab} club admins.
                      </td>
                    </tr>
                  ) : (
                    paginatedData.map(a => (
                      <tr key={a._id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-8">{a.firstName} {a.lastName}</td>
                        <td className="py-4 px-8">{a.email}</td>
                        {activeTab === 'pending' && (
                          <td className="py-4 px-8">
                            {a.clubAdminRequest?.attachment ? (
                              <Button icon={<FaEye />} onClick={() => openAttachmentModal(a.clubAdminRequest.attachment)}>
                                View
                              </Button>
                            ) : 'No file'}
                          </td>
                        )}
                        <td className="py-4 px-8 flex gap-2">
                          {activeTab === 'verified' ? (
                            <>
                              <Button icon={<FaEdit />} onClick={() => handleEdit(a)}>Edit</Button>
                              <Button danger icon={<FaTrash />} onClick={() => { setSelectedAdmin(a); setShowRevertModal(true); }}>
                                Revert
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button type="primary" icon={<FaCheck />} className="bg-green-600 text-white" onClick={() => handleApprove(a._id)}>Approve</Button>
                              <Button danger icon={<FaTimes />} onClick={() => handleReject(a._id)}>Reject</Button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              {data.length > pageSize && (
                <div className="flex justify-end mt-4">
                  <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={data.length}
                    onChange={setCurrentPage}
                    showSizeChanger={false}
                  />
                </div>
              )}
            </div>
          )}

          {/* Modals */}
          <Modal title="Attachment" open={attachmentModal} onCancel={() => setAttachmentModal(false)} footer={null}>
            {selectedAttachment?.endsWith('.pdf') ? (
              <embed src={selectedAttachment} width="100%" height="500px" type="application/pdf" />
            ) : <img src={selectedAttachment} alt="Attachment" className="w-full" />}
          </Modal>

          <Modal
            title={editingAdminId ? "Edit Club Admin" : "Add Club Admin"}
            open={showAddModal}
            onCancel={() => { setShowAddModal(false); addForm.resetFields(); setEditingAdminId(null); }}
            onOk={() => addForm.submit()}
            okText={editingAdminId ? "Update" : "Add"}
          >
            <Form layout="vertical" form={addForm} onFinish={async (values) => {
              try {
                if (editingAdminId) {
                  await axios.put(`/api/clubAdmins/${editingAdminId}`, values);
                  message.success('Club admin updated!');
                } else {
                  await axios.post('/api/clubAdmins', { ...values, roles: ['clubadmin'], isVerifiedClubAdmin: true });
                  message.success('Club admin added!');
                }
                setShowAddModal(false); addForm.resetFields(); setEditingAdminId(null); fetchClubAdmins();
              } catch {
                message.error('Failed to save club admin.');
              }
            }}>
              <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}><Input /></Form.Item>
              <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}><Input /></Form.Item>
              <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}><Input /></Form.Item>
              <Form.Item label="Username" name="username" rules={[{ required: true }]}><Input /></Form.Item>
              <Form.Item label="Birthdate" name="birthDate" rules={[{ required: true }]}><Input type="date" /></Form.Item>
              {!editingAdminId && <Form.Item label="Password" name="password" rules={[{ required: true }]}><Input.Password /></Form.Item>}
            </Form>
          </Modal>

          <Modal
            title="Revert to Player"
            open={showRevertModal}
            onCancel={() => setShowRevertModal(false)}
            onOk={handleRevertConfirmed}
            okText="Revert"
            cancelText="Cancel"
          >
            <p>Are you sure you want to revert <strong>{selectedAdmin?.firstName} {selectedAdmin?.lastName}</strong> to player?</p>
          </Modal>
        </main>
      </section>
    </div>
  );
};

export default ClubAdmins;
