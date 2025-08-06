import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Modal, Button, Input, Form, message } from 'antd';
import { FaCheck, FaTimes, FaEye, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Organizers = () => {
  const [verifiedOrganizers, setVerifiedOrganizers] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRevertModal, setShowRevertModal] = useState(false);
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);
  const [editingOrganizerId, setEditingOrganizerId] = useState(null);
  const [addForm] = Form.useForm();
  const [searchTerm, setSearchTerm] = useState('');

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
      console.error('Error fetching organizers:', err);
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
    } catch (err) {
      console.error('Approval error:', err);
      message.error('Failed to approve.');
    }
  };

  const handleReject = async (userId) => {
    try {
      await axios.put(`/api/users/${userId}`, {
        organizerRequest: { status: 'rejected' }
      });
      message.warning('Organizer request rejected.');
      fetchOrganizers();
    } catch (err) {
      console.error('Rejection error:', err);
      message.error('Failed to reject.');
    }
  };

  const openAttachmentModal = (attachment) => {
    setSelectedAttachment(attachment);
    setAttachmentModal(true);
  };

  const handleAddSubmit = async () => {
    try {
      const values = await addForm.validateFields();
      if (editingOrganizerId) {
        await axios.put(`/api/users/${editingOrganizerId}`, values);
        message.success('Organizer updated successfully!');
      } else {
        await axios.post('/api/organizers', {
          ...values,
          roles: ['organizer'],
          isVerifiedOrganizer: true
        });
        message.success('Organizer added successfully!');
      }
      setShowAddModal(false);
      addForm.resetFields();
      setEditingOrganizerId(null);
      fetchOrganizers();
    } catch (err) {
      console.error('Error saving organizer:', err);
      message.error(err?.response?.data?.message || 'Failed to save organizer.');
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

  const openRevertModal = (organizer) => {
    setSelectedOrganizer(organizer);
    setShowRevertModal(true);
  };

  const handleRevertConfirmed = async () => {
    if (!selectedOrganizer) return;
    try {
      const res = await axios.put(`/api/organizers/revert/${selectedOrganizer._id}`);
      message.success(res.data.message || 'Organizer reverted to player successfully!');
      setShowRevertModal(false);
      fetchOrganizers();
    } catch (err) {
      console.error('❌ Error reverting organizer:', err);
      message.error(err?.response?.data?.message || 'Failed to revert organizer.');
    }
  };

  const filteredVerified = verifiedOrganizers.filter((o) =>
    `${o.firstName} ${o.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPending = pendingRequests.filter((o) =>
    `${o.firstName} ${o.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar />
      <section id="content">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold text-nuBlue mb-4">Organizers</h1>

          <div className="flex justify-between items-center mb-4">
            <Button
              type="primary"
              icon={<FaPlus />}
              className="bg-nuBlue text-white"
              onClick={() => setShowAddModal(true)}
            >
              Add Organizer
            </Button>
            <Input
              placeholder="Search organizers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-1/3"
            />
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">✅ Verified Organizers</h2>
              <table className="min-w-full bg-white mb-6 rounded shadow">
                <thead className="bg-nuBlue text-white">
                  <tr>
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVerified.map((organizer) => (
                    <tr key={organizer._id} className="border-b">
                      <td className="py-2 px-4">{organizer.firstName} {organizer.lastName}</td>
                      <td className="py-2 px-4">{organizer.email}</td>
                      <td className="py-2 px-4 flex gap-2">
                        <Button icon={<FaEdit />} onClick={() => handleEdit(organizer)}>Edit</Button>
                        <Button
                          danger
                          icon={<FaTrash />}
                          onClick={() => openRevertModal(organizer)}
                        >
                          Revert
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 className="text-xl font-semibold mb-2">🕒 Pending Organizer Requests</h2>
              <table className="min-w-full bg-white rounded shadow">
                <thead className="bg-yellow-500 text-white">
                  <tr>
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="py-2 px-4 text-left">Attachment</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPending.map((req) => (
                    <tr key={req._id} className="border-b">
                      <td className="py-2 px-4">{req.firstName} {req.lastName}</td>
                      <td className="py-2 px-4">{req.email}</td>
                      <td className="py-2 px-4">
                        {req.organizerRequest?.attachment ? (
                          <Button icon={<FaEye />} onClick={() => openAttachmentModal(req.organizerRequest.attachment)}>
                            View
                          </Button>
                        ) : 'No file'}
                      </td>
                      <td className="py-2 px-4 flex gap-2">
                        <Button
                          type="primary"
                          icon={<FaCheck />}
                          className="bg-green-600 text-white"
                          onClick={() => handleApprove(req._id)}
                        >
                          Approve
                        </Button>
                        <Button
                          danger
                          icon={<FaTimes />}
                          onClick={() => handleReject(req._id)}
                        >
                          Reject
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* 👀 Attachment Modal */}
          <Modal
            title="Attachment"
            open={attachmentModal}
            onCancel={() => setAttachmentModal(false)}
            footer={null}
          >
            {selectedAttachment?.endsWith('.pdf') ? (
              <embed src={selectedAttachment} width="100%" height="500px" type="application/pdf" />
            ) : (
              <img src={selectedAttachment} alt="Attachment" className="w-full" />
            )}
          </Modal>

          {/* ➕ Add/Edit Modal */}
          <Modal
            title={editingOrganizerId ? "Edit Organizer" : "Add Organizer"}
            open={showAddModal}
            onCancel={() => {
              setShowAddModal(false);
              addForm.resetFields();
              setEditingOrganizerId(null);
            }}
            onOk={() => addForm.submit()}
            okText={editingOrganizerId ? "Update" : "Add"}
          >
            <Form layout="vertical" form={addForm} onFinish={handleAddSubmit}>
              <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Username" name="username" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Birthdate" name="birthDate" rules={[{ required: true }]}>
                <Input type="date" />
              </Form.Item>
              {!editingOrganizerId && (
                <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                  <Input.Password />
                </Form.Item>
              )}
            </Form>
          </Modal>

          {/* 🔁 Revert Organizer Modal */}
          <Modal
            title="Revert Organizer to Player"
            open={showRevertModal}
            onCancel={() => setShowRevertModal(false)}
            onOk={handleRevertConfirmed}
            okText="Revert"
            cancelText="Cancel"
          >
            <p>
              Are you sure you want to revert <strong>{selectedOrganizer?.firstName} {selectedOrganizer?.lastName}</strong> to player?
              <br />This will remove their <strong>organizer</strong> role.
            </p>
          </Modal>
        </main>
      </section>
    </div>
  );
};

export default Organizers;
