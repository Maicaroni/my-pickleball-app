import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Modal, Button, Input, Form, message } from 'antd';
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

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const res = await axios.get('/api/users?role=player');
      setPlayers(res.data);
    } catch (err) {
      console.error('Error fetching players:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteConfirmed = async () => {
    if (!selectedPlayer) return;
    try {
      await axios.delete(`/api/users/${selectedPlayer._id}`);
      setPlayers(players.filter((player) => player._id !== selectedPlayer._id));
      setShowDeleteModal(false);
    } catch (err) {
      console.error('Error deleting player:', err);
    }
  };

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

 const handleAddSubmit = async () => {
  try {
    const values = await addForm.validateFields();

    // ✅ Convert birthDate to ISO format for backend
    values.birthDate = new Date(values.birthDate).toISOString();

    const res = await axios.post(`/api/users`, { ...values, role: 'player' });

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

  const filteredPlayers = players.filter((player) =>
    `${player.firstName} ${player.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar />
      <section id="content">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold text-nuBlue mb-6">Players</h1>

          <div className="flex justify-between items-center mb-4">
            <Button type="primary" className="bg-nuBlue text-white hover:bg-blue-700" onClick={() => setShowAddModal(true)}>
              Add Player (PWD Guide)
            </Button>
            <Input
              placeholder="Search players..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-1/3"
            />
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded shadow-md">
                <thead className="bg-nuBlue text-white">
                  <tr>
                    <th className="py-2 px-4 text-left">#</th>
                    <th className="py-2 px-4 text-left">User</th>
                    <th className="py-2 px-4 text-left">Username</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPlayers.map((player, index) => (
                    <tr key={player._id} className="border-b">
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">{player.firstName} {player.lastName}</td>
                      <td className="py-2 px-4">{player.email.split('@')[0]}</td>
                      <td className="py-2 px-4 flex gap-2">
                        <button
                          onClick={() => openEditModal(player)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FaEdit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedPlayer(player);
                            setShowDeleteModal(true);
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <Modal
            title="Edit Player"
            open={showEditModal}
            onCancel={() => setShowEditModal(false)}
            onOk={handleEditSubmit}
            okText="Save"
            cancelText="Cancel"
          >
            <Form layout="vertical" form={editForm} onFinish={handleEditSubmit}>
              <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter first name' }]}> 
                <Input />
              </Form.Item>
              <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please enter last name' }]}> 
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter email' }]}> 
                <Input />
              </Form.Item>
            </Form>
          </Modal>

          <Modal
            title="Confirm Deletion"
            open={showDeleteModal}
            onCancel={() => setShowDeleteModal(false)}
            onOk={handleDeleteConfirmed}
            okText="Delete"
            cancelText="Cancel"
          >
            <p>Are you sure you want to delete <strong>{selectedPlayer?.firstName} {selectedPlayer?.lastName}</strong>?</p>
          </Modal>

          <Modal
            title="Add Player"
            open={showAddModal}
            onCancel={() => setShowAddModal(false)}
            onOk={() => addForm.submit()}
            okText="Add"
            cancelText="Cancel"
          >
            <Form layout="vertical" form={addForm} onFinish={handleAddSubmit}>
              <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter first name' }]}> 
                <Input />
              </Form.Item>
              <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please enter last name' }]}> 
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter email' }]}> 
                <Input />
              </Form.Item>
              <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter username' }]}> 
                <Input />
              </Form.Item>
              <Form.Item
                label="Birthdate"
                name="birthDate"
                rules={[{ required: true, message: 'Please enter birthdate' }]}
              >
                <Input type="date" />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter password' }]}> 
                <Input.Password />
              </Form.Item>
            </Form>
          </Modal>

        </main>
      </section>
    </div>
  );
};

export default Players;
