import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Modal, Button, Input, Form, message } from 'antd';
import { FaCheck, FaTimes, FaEye, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Coaches = () => {
  const [verifiedCoaches, setVerifiedCoaches] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRevertModal, setShowRevertModal] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [editingCoachId, setEditingCoachId] = useState(null);
  const [addForm] = Form.useForm();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCoaches();
  }, []);

  const fetchCoaches = async () => {
    try {
      setLoading(true);
      const [verifiedRes, pendingRes] = await Promise.all([
        axios.get('/api/coaches/verified'),
        axios.get('/api/coaches/requests')
      ]);
      setVerifiedCoaches(verifiedRes.data);
      setPendingRequests(pendingRes.data);
    } catch (err) {
      console.error('Error fetching coaches:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (userId) => {
    try {
      await axios.put(`/api/coaches/status/${userId}`, {
        roles: ['player', 'coach'],
        isVerifiedCoach: true,
        coachRequest: { status: 'approved' }
      });
      message.success('Coach approved!');
      fetchCoaches();
    } catch (err) {
      console.error('Approval error:', err);
      message.error('Failed to approve.');
    }
  };

  const handleReject = async (userId) => {
    try {
      await axios.put(`/api/users/${userId}`, {
        coachRequest: { status: 'rejected' }
      });
      message.warning('Coach request rejected.');
      fetchCoaches();
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
      if (editingCoachId) {
        await axios.put(`/api/users/${editingCoachId}`, values);
        message.success('Coach updated successfully!');
      } else {
        await axios.post('/api/coaches', {
          ...values,
          roles: ['coach'],
          isVerifiedCoach: true
        });
        message.success('Coach added successfully!');
      }
      setShowAddModal(false);
      addForm.resetFields();
      setEditingCoachId(null);
      fetchCoaches();
    } catch (err) {
      console.error('Error saving coach:', err);
      message.error(err?.response?.data?.message || 'Failed to save coach.');
    }
  };

  const handleEdit = (coach) => {
    addForm.setFieldsValue({
      firstName: coach.firstName,
      lastName: coach.lastName,
      email: coach.email,
      username: coach.username,
      birthDate: coach.birthDate?.substring(0, 10)
    });
    setEditingCoachId(coach._id);
    setShowAddModal(true);
  };

  const openRevertModal = (coach) => {
    setSelectedCoach(coach);
    setShowRevertModal(true);
  };

  const handleRevertConfirmed = async () => {
    if (!selectedCoach) return;
    try {
      const res = await axios.put(`/api/coaches/revert/${selectedCoach._id}`);
      message.success(res.data.message || 'Coach reverted to player successfully!');
      setShowRevertModal(false);
      fetchCoaches();
    } catch (err) {
      console.error('❌ Error reverting coach:', err);
      message.error(err?.response?.data?.message || 'Failed to revert coach.');
    }
  };

  const filteredVerified = verifiedCoaches.filter((c) =>
    `${c.firstName} ${c.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPending = pendingRequests.filter((c) =>
    `${c.firstName} ${c.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar />
      <section id="content">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold text-nuBlue mb-4">Coaches</h1>

          <div className="flex justify-between items-center mb-4">
            <Button
              type="primary"
              icon={<FaPlus />}
              className="bg-nuBlue text-white"
              onClick={() => setShowAddModal(true)}
            >
              Add Coach
            </Button>
            <Input
              placeholder="Search coaches..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-1/3"
            />
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">✅ Verified Coaches</h2>
              <table className="min-w-full bg-white mb-6 rounded shadow">
                <thead className="bg-nuBlue text-white">
                  <tr>
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVerified.map((coach) => (
                    <tr key={coach._id} className="border-b">
                      <td className="py-2 px-4">{coach.firstName} {coach.lastName}</td>
                      <td className="py-2 px-4">{coach.email}</td>
                      <td className="py-2 px-4 flex gap-2">
                        <Button icon={<FaEdit />} onClick={() => handleEdit(coach)}>Edit</Button>
                        <Button
                          danger
                          icon={<FaTrash />}
                          onClick={() => openRevertModal(coach)}
                        >
                          Revert
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 className="text-xl font-semibold mb-2">🕒 Pending Coach Requests</h2>
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
                        {req.coachRequest?.attachment ? (
                          <Button icon={<FaEye />} onClick={() => openAttachmentModal(req.coachRequest.attachment)}>
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
            title={editingCoachId ? "Edit Coach" : "Add Coach"}
            open={showAddModal}
            onCancel={() => {
              setShowAddModal(false);
              addForm.resetFields();
              setEditingCoachId(null);
            }}
            onOk={() => addForm.submit()}
            okText={editingCoachId ? "Update" : "Add"}
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
              {!editingCoachId && (
                <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                  <Input.Password />
                </Form.Item>
              )}
            </Form>
          </Modal>

          {/* 🔁 Revert Coach Modal */}
          <Modal
            title="Revert Coach to Player"
            open={showRevertModal}
            onCancel={() => setShowRevertModal(false)}
            onOk={handleRevertConfirmed}
            okText="Revert"
            cancelText="Cancel"
          >
            <p>
              Are you sure you want to revert <strong>{selectedCoach?.firstName} {selectedCoach?.lastName}</strong> to player?
              <br />This will remove their <strong>coach</strong> role.
            </p>
          </Modal>
        </main>
      </section>
    </div>
  );
};

export default Coaches;
