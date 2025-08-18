import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Modal, Button, Input, Form, message } from 'antd';
import { FaCheck, FaTimes, FaEye, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const ClubAdmins = () => {
  const [verifiedAdmins, setVerifiedAdmins] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRevertModal, setShowRevertModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [editingAdminId, setEditingAdminId] = useState(null);
  const [addForm] = Form.useForm();
  const [searchTerm, setSearchTerm] = useState('');

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
      console.error('Error fetching club admins:', err);
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
    } catch (err) {
      console.error('Approval error:', err);
      message.error('Failed to approve.');
    }
  };

  const handleReject = async (userId) => {
    try {
      await axios.put(`/api/users/${userId}`, {
        clubAdminRequest: { status: 'rejected' }
      });
      message.warning('Club admin request rejected.');
      fetchClubAdmins();
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
      if (editingAdminId) {
        await axios.put(`/api/clubAdmins/${editingAdminId}`, values);
        message.success('Club admin updated!');
      } else {
        await axios.post('/api/clubAdmins', {
          ...values,
          roles: ['clubadmin'],
          isVerifiedClubAdmin: true
        });
        message.success('Club admin added!');
      }
      setShowAddModal(false);
      addForm.resetFields();
      setEditingAdminId(null);
      fetchClubAdmins();
    } catch (err) {
      console.error('Save error:', err);
      message.error(err?.response?.data?.message || 'Failed to save club admin.');
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

  const openRevertModal = (admin) => {
    setSelectedAdmin(admin);
    setShowRevertModal(true);
  };

  const handleRevertConfirmed = async () => {
    if (!selectedAdmin) return;
    try {
      const res = await axios.put(`/api/clubAdmins/revert/${selectedAdmin._id}`);
      message.success(res.data.message || 'Reverted to player!');
      setShowRevertModal(false);
      fetchClubAdmins();
    } catch (err) {
      console.error('Revert error:', err);
      message.error(err?.response?.data?.message || 'Failed to revert.');
    }
  };

  const filteredVerified = verifiedAdmins.filter((a) =>
    `${a.firstName} ${a.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPending = pendingRequests.filter((a) =>
    `${a.firstName} ${a.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar />
      <section id="content">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold text-nuBlue mb-4">Club Admins</h1>

          <div className="flex justify-between items-center mb-4">
            <Button
              type="primary"
              icon={<FaPlus />}
              className="bg-nuBlue text-white"
              onClick={() => setShowAddModal(true)}
            >
              Add Club Admin
            </Button>
            <Input
              placeholder="Search club admins..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-1/3"
            />
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">✅ Verified Club Admins</h2>
              <table className="min-w-full bg-white mb-6 rounded shadow">
                <thead className="bg-nuBlue text-white">
                  <tr>
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVerified.map((admin) => (
                    <tr key={admin._id} className="border-b">
                      <td className="py-2 px-4">{admin.firstName} {admin.lastName}</td>
                      <td className="py-2 px-4">{admin.email}</td>
                      <td className="py-2 px-4 flex gap-2">
                        <Button icon={<FaEdit />} onClick={() => handleEdit(admin)}>Edit</Button>
                        <Button danger icon={<FaTrash />} onClick={() => openRevertModal(admin)}>Revert</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 className="text-xl font-semibold mb-2">🕒 Pending Club Admin Requests</h2>
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
                        {req.clubAdminRequest?.attachment ? (
                          <Button icon={<FaEye />} onClick={() => openAttachmentModal(req.clubAdminRequest.attachment)}>
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

          {/* Attachment Modal */}
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

          {/* Add/Edit Modal */}
          <Modal
            title={editingAdminId ? "Edit Club Admin" : "Add Club Admin"}
            open={showAddModal}
            onCancel={() => {
              setShowAddModal(false);
              addForm.resetFields();
              setEditingAdminId(null);
            }}
            onOk={() => addForm.submit()}
            okText={editingAdminId ? "Update" : "Add"}
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
              {!editingAdminId && (
                <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                  <Input.Password />
                </Form.Item>
              )}
            </Form>
          </Modal>

          {/* Revert Modal */}
          <Modal
            title="Revert to Player"
            open={showRevertModal}
            onCancel={() => setShowRevertModal(false)}
            onOk={handleRevertConfirmed}
            okText="Revert"
            cancelText="Cancel"
          >
            <p>
              Are you sure you want to revert <strong>{selectedAdmin?.firstName} {selectedAdmin?.lastName}</strong> to player?
              <br />This will remove their <strong>clubadmin</strong> role.
            </p>
          </Modal>
        </main>
      </section>
    </div>
  );
};

export default ClubAdmins;