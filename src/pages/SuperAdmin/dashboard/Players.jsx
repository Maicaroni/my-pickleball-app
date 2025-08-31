import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Modal, Button, Input, Form, message, Pagination } from 'antd';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [editForm] = Form.useForm();
  const [addForm] = Form.useForm();
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
  try {
    const res = await axios.get('/api/users?role=player');
    setPlayers(Array.isArray(res.data) ? res.data : []);
  } catch (err) {
    console.error('Error fetching players:', err);
    setPlayers([]); // fallback
  } finally {
    setLoading(false);
  }
};


  // Delete player handler remains the same
  const handleDeleteConfirmed = async () => {
    if (!selectedPlayer) return;
    try {
      await axios.delete(`/api/users/${selectedPlayer._id}`);
      setPlayers(players.filter((player) => player._id !== selectedPlayer._id));
      setShowDeleteModal(false);
      message.success('Player deleted.');
    } catch (err) {
      console.error('Error deleting player:', err);
      message.error('Failed to delete player.');
    }
  };

  // Edit player handler remains the same
  const handleEditSubmit = async () => {
    try {
      const values = await editForm.validateFields();
      await axios.put(`/api/users/${selectedPlayer._id}`, values);
      message.success('Player updated successfully.');
      fetchPlayers();
      setShowEditModal(false);
    } catch (err) {
      console.error('Error updating player:', err);
      message.error('Failed to update player.');
    }
  };

  // Add player handler remains the same
  const handleAddSubmit = async () => {
    try {
      const values = await addForm.validateFields();
      values.birthDate = new Date(values.birthDate).toISOString();
      await axios.post(`/api/users`, { ...values, role: 'player' });
      fetchPlayers();
      addForm.resetFields();
      message.success('Player added successfully.');
      setShowAddModal(false);
    } catch (err) {
      console.error('Error adding player:', err);
      message.error('Failed to add player.');
    }
  };

  const openEditModal = (player) => {
    setSelectedPlayer(player);
    editForm.setFieldsValue({
      firstName: player.firstName,
      lastName: player.lastName,
      email: player.email,
    });
    setShowEditModal(true);
  };

  // Filter players by search term
  const filteredPlayers = players.filter((player) =>
    `${player.firstName} ${player.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate players for current page
  const startIndex = (currentPage - 1) * pageSize;
  const currentPlayers = filteredPlayers.slice(startIndex, startIndex + pageSize);

  // Helper function to calculate age from birthDate
  const calculateAge = (birthDateStr) => {
    if (!birthDateStr) return '-';
    const birthDate = new Date(birthDateStr);
    const diff = Date.now() - birthDate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className="app">
      <Sidebar />
      <section id="content" className="players-content">
        <Navbar />
        <main className="p-6 max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-extrabold text-nuBlue mb-8">Players</h1>
<div className="flex flex-row justify-between items-center mb-8 gap-5 px-6">
  <Button
    type="primary"
    className="bg-nuBlue text-white hover:bg-blue-700 rounded-lg px-5 py-3 shadow-md transition"
    onClick={() => setShowAddModal(true)}
  >
    + Add Player
  </Button>
  <Input
    placeholder="Search players..."
    value={searchTerm}
    onChange={(e) => {
      setSearchTerm(e.target.value);
      setCurrentPage(1);
    }}
    className="search-input rounded-lg shadow-sm"
    style={{ maxWidth: '320px', padding: '10px 16px', fontSize: '16px' }}
    allowClear
  />
</div>

          {loading ? (
            <div className="loading-spinner text-center text-lg py-10">Loading...</div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
                <table className="min-w-full bg-white rounded-lg table-auto border-collapse">
                  <thead className="bg-nuBlue text-white rounded-t-lg">
                    <tr>
                      <th className="py-4 px-8 text-left text-lg font-semibold">PPLID</th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">User</th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">Username</th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">Gender</th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">Age</th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPlayers.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-10 text-gray-500 text-lg font-light">
                          No players found.
                        </td>
                      </tr>
                    ) : (
                      currentPlayers.map((player, index) => (
                        <tr
                          key={player._id}
                          className="border-b hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <td className="py-4 px-8 text-base">{player._id.slice(-6)}</td> {/* last 6 chars */}
                          <td className="py-4 px-8 font-medium text-gray-900">{player.firstName} {player.lastName}</td>
                          <td className="py-4 px-8 lowercase text-gray-700">{player.email.split('@')[0]}</td>
                          <td className="py-4 px-8">{player.gender || '-'}</td>
                          <td className="py-4 px-8">{calculateAge(player.birthDate)}</td>
                          <td className="py-4 px-8 flex gap-5">
                            <button
                              onClick={() => openEditModal(player)}
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                              aria-label={`Edit ${player.firstName}`}
                            >
                              <FaEdit size={20} />
                            </button>
                            <button
                              onClick={() => {
                                setSelectedPlayer(player);
                                setShowDeleteModal(true);
                              }}
                              className="text-red-600 hover:text-red-800 transition-colors"
                              aria-label={`Delete ${player.firstName}`}
                            >
                              <FaTrash size={20} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {filteredPlayers.length > pageSize && (
                <div className="flex justify-center mt-6">
                  <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={filteredPlayers.length}
                    onChange={(page) => setCurrentPage(page)}
                    showSizeChanger={false}
                  />
                </div>
              )}
            </>
          )}

          {/* Edit Modal */}
          <Modal
            title="Edit Player"
            open={showEditModal}
            onCancel={() => setShowEditModal(false)}
            onOk={handleEditSubmit}
            okText="Save"
            cancelText="Cancel"
            destroyOnHidden
            styles={{ body: { padding: '24px 32px' } }}
            okButtonProps={{ style: { borderRadius: '6px' } }}
            cancelButtonProps={{ style: { borderRadius: '6px' } }}
          >
            <Form layout="vertical" form={editForm} onFinish={handleEditSubmit} labelAlign="left">
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'Please enter first name' }]}
              >
                <Input placeholder="First Name" size="large" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Please enter last name' }]}
              >
                <Input placeholder="Last Name" size="large" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter email' },
                  { type: 'email', message: 'Enter a valid email' },
                ]}
              >
                <Input placeholder="Email" size="large" />
              </Form.Item>
            </Form>
          </Modal>

          {/* Delete Modal */}
          <Modal
            title="Confirm Deletion"
            open={showDeleteModal}
            onCancel={() => setShowDeleteModal(false)}
            onOk={handleDeleteConfirmed}
            okText="Delete"
            cancelText="Cancel"
            okButtonProps={{ danger: true, style: { borderRadius: '6px' } }}
            cancelButtonProps={{ style: { borderRadius: '6px' } }}
            destroyOnHidden
          >
            <p className="text-lg">
              Are you sure you want to delete <strong>{selectedPlayer?.firstName} {selectedPlayer?.lastName}</strong>?
            </p>
          </Modal>

          {/* Add Modal */}
          <Modal
            title="Add Player"
            open={showAddModal}
            onCancel={() => setShowAddModal(false)}
            onOk={() => addForm.submit()}
            okText="Add"
            cancelText="Cancel"
            destroyOnHidden
            styles={{ body: { padding: '24px 32px' } }}
            okButtonProps={{ style: { borderRadius: '6px' } }}
            cancelButtonProps={{ style: { borderRadius: '6px' } }}
          >
            <Form layout="vertical" form={addForm} onFinish={handleAddSubmit} labelAlign="left">
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'Please enter first name' }]}
              >
                <Input placeholder="First Name" size="large" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Please enter last name' }]}
              >
                <Input placeholder="Last Name" size="large" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter email' },
                  { type: 'email', message: 'Enter a valid email' },
                ]}
              >
                <Input placeholder="Email" size="large" />
              </Form.Item>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please enter username' }]}
              >
                <Input placeholder="Username" size="large" />
              </Form.Item>
              <Form.Item
                label="Birthdate"
                name="birthDate"
                rules={[{ required: true, message: 'Please enter birthdate' }]}
              >
                <Input type="date" size="large" />
              </Form.Item>
              <Form.Item
                label="Gender"
                name="gender"
              >
                <Input placeholder="Gender (optional)" size="large" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter password' }]}
              >
                <Input.Password placeholder="Password" size="large" />
              </Form.Item>
            </Form>
          </Modal>
        </main>
      </section>
    </div>
  );
};

export default Players;