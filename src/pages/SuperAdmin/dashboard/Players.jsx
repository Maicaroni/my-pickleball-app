import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Modal, Button, Input, Form, message, Pagination, Select, Card, Statistic, Avatar, Divider } from 'antd';
import { FaTrash, FaEdit, FaUsers, FaMale, FaFemale, FaPlus, FaSearch, FaEye, FaIdCard, FaEnvelope, FaBirthdayCake, FaCalendarAlt, FaMapMarkerAlt, FaUser, FaStar } from 'react-icons/fa';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showPlayerInfoModal, setShowPlayerInfoModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [editForm] = Form.useForm();
  const [addForm] = Form.useForm();
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const res = await axios.get('/api/users?role=player');
      setPlayers(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error('Error fetching players:', err);
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  };

  // Delete player handler
  const handleDeleteConfirmed = async () => {
    if (!selectedPlayer) return;
    try {
      await axios.delete(`/api/users/${selectedPlayer._id}`);
      setPlayers(players.filter((player) => player._id !== selectedPlayer._id));
      setShowDeleteModal(false);
      message.success('Player deleted successfully.');
    } catch (err) {
      console.error('Error deleting player:', err);
      message.error('Failed to delete player.');
    }
  };

  // Edit player handler
  const handleEditSubmit = async () => {
    try {
      const values = await editForm.validateFields();
      await axios.put(`/api/users/${selectedPlayer._id}`, values);
      message.success('Player updated successfully.');
      fetchPlayers();
      setShowEditModal(false);
      setShowPlayerInfoModal(false);
    } catch (err) {
      console.error('Error updating player:', err);
      message.error('Failed to update player.');
    }
  };

  // Fixed Add player handler
  const handleAddSubmit = async () => {
    try {
      const values = await addForm.validateFields();
      
      // Clean up the payload
      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email || `noemail_${Date.now()}@example.com`,
        password: values.password || `${values.firstName}${values.lastName}${new Date().getFullYear()}`,
        birthDate: values.birthDate || null,
        gender: values.gender || 'male',
        duprId: values.duprId || null,
        address: values.address || null,
        roles: ['player']
      };

      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;
      
      if (!token) {
        return message.error("You must be logged in to register a player.");
      }

      await axios.post("/api/auth/playerregister", payload, {
        headers: { 
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json" 
        },
      });

      fetchPlayers();
      addForm.resetFields();
      setShowAddModal(false);
      message.success(`Player registered successfully! Default password: ${payload.password}`);
    } catch (err) {
      console.error("Error registering player:", err.response?.data || err);
      message.error(err.response?.data?.message || "Failed to register player.");
    }
  };

  const openEditModal = (player) => {
    setSelectedPlayer(player);
    editForm.setFieldsValue({
      firstName: player.firstName,
      lastName: player.lastName,
      email: player.email,
      gender: player.gender,
      duprId: player.duprId,
      address: player.address,
      birthDate: player.birthDate ? new Date(player.birthDate).toISOString().split('T')[0] : null,
    });
    setShowEditModal(true);
  };

  const openPlayerInfoModal = (player) => {
    setSelectedPlayer(player);
    setShowPlayerInfoModal(true);
  };

  // Filter players by search term
  const filteredPlayers = players.filter((player) =>
    `${player.firstName} ${player.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (player.pplId && player.pplId.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (player.duprId && player.duprId.toLowerCase().includes(searchTerm.toLowerCase()))
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

  // Helper function to format date
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Not provided';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Generate avatar colors based on name
  const getAvatarColor = (firstName, lastName) => {
    const colors = [
      '#f56565', '#ed8936', '#ecc94b', '#48bb78', '#38b2ac', 
      '#4299e1', '#667eea', '#9f7aea', '#ed64a6', '#fc8181'
    ];
    const nameHash = (firstName + lastName).split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return colors[Math.abs(nameHash) % colors.length];
  };

  // Calculate statistics
  const totalPlayers = players.length;
  const maleCount = players.filter(player => player.gender === 'male').length;
  const femaleCount = players.filter(player => player.gender === 'female').length;

  return (
    <div className="app">
      <Sidebar />
      <section id="content" className="players-content">
        <Navbar />
        <main className="p-6 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Players Management</h1>
            <p className="text-gray-600">Manage and monitor all registered players</p>
          </div>

          {/* Single Horizontal Statistics Card */}
          <div className="mb-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
              <div className="grid grid-cols-3 divide-x divide-gray-200">
                <div className="text-center px-6 py-4">
                  <div className="flex items-center justify-center mb-2">
                    <FaUsers className="text-3xl text-blue-500 mr-3" />
                    <div>
                      <div className="text-3xl font-bold text-blue-600">{totalPlayers}</div>
                      <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Total</div>
                    </div>
                  </div>
                </div>
                <div className="text-center px-6 py-4">
                  <div className="flex items-center justify-center mb-2">
                    <FaMale className="text-3xl text-blue-600 mr-3" />
                    <div>
                      <div className="text-3xl font-bold text-blue-700">{maleCount}</div>
                      <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Male</div>
                    </div>
                  </div>
                </div>
                <div className="text-center px-6 py-4">
                  <div className="flex items-center justify-center mb-2">
                    <FaFemale className="text-3xl text-pink-500 mr-3" />
                    <div>
                      <div className="text-3xl font-bold text-pink-600">{femaleCount}</div>
                      <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Female</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Action Bar */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button
                type="primary"
                size="large"
                icon={<FaPlus />}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-0 rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setShowAddModal(true)}
              >
                Add New Player
              </Button>
              <div className="relative">
                <Input
                  placeholder="Search players by name, email, PPL ID, or DUPR ID..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  prefix={<FaSearch className="text-gray-400" />}
                  className="rounded-lg shadow-sm w-full sm:w-80"
                  size="large"
                  allowClear
                />
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              <span className="ml-4 text-lg text-gray-600">Loading players...</span>
            </div>
          ) : (
            <>
              {/* Players Table */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-blue-500 to-blue-600">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">PPL ID</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">DUPR ID</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">Player Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">Email</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">Gender</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">Age</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentPlayers.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="px-6 py-12 text-center">
                            <div className="flex flex-col items-center">
                              <FaUsers className="text-6xl text-gray-300 mb-4" />
                              <p className="text-xl text-gray-500 font-medium">No players found</p>
                              <p className="text-gray-400 mt-2">Try adjusting your search criteria</p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        currentPlayers.map((player, index) => (
                          <tr
                            key={player._id}
                            className={`hover:bg-gray-50 transition-colors duration-200 ${
                              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                            }`}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                              {player.pplId || '-'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {player.duprId || '-'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {player.firstName} {player.lastName}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {player.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                player.gender === 'male' 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : player.gender === 'female'
                                  ? 'bg-pink-100 text-pink-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {player.gender === 'male' && <FaMale className="mr-1" />}
                                {player.gender === 'female' && <FaFemale className="mr-1" />}
                                {player.gender || 'N/A'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {calculateAge(player.birthDate)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-3">
                                <button
                                  onClick={() => openPlayerInfoModal(player)}
                                  className="text-green-600 hover:text-green-900 transition-colors duration-200 p-2 rounded-full hover:bg-green-50"
                                  aria-label={`View ${player.firstName} details`}
                                >
                                  <FaEye size={16} />
                                </button>
                                <button
                                  onClick={() => {
                                    setSelectedPlayer(player);
                                    setShowDeleteModal(true);
                                  }}
                                  className="text-red-600 hover:text-red-900 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
                                  aria-label={`Delete ${player.firstName}`}
                                >
                                  <FaTrash size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pagination */}
              {filteredPlayers.length > pageSize && (
                <div className="flex justify-center mt-8">
                  <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={filteredPlayers.length}
                    onChange={(page) => setCurrentPage(page)}
                    showSizeChanger={false}
                    showQuickJumper
                    showTotal={(total, range) => 
                      `${range[0]}-${range[1]} of ${total} players`
                    }
                    className="bg-white p-4 rounded-lg shadow-sm"
                  />
                </div>
              )}
            </>
          )}

          {/* Enhanced Player Info Modal */}
          <Modal
            title={null}
            open={showPlayerInfoModal}
            onCancel={() => setShowPlayerInfoModal(false)}
            footer={null}
            width={900}
            className="top-4"
            styles={{
              body: { padding: 0 },
              header: { display: 'none' }
            }}
          >
            {selectedPlayer && (
              <div className="relative bg-white">
                {/* Elegant Header */}
                <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-10 py-12 border-b border-gray-100">
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <span className="text-3xl font-bold text-blue-700">
                          {selectedPlayer.firstName?.charAt(0)}{selectedPlayer.lastName?.charAt(0)}
                        </span>
                      </div>
                    </div>
                    
                    <h1 className="text-4xl font-light text-gray-800 mb-3 tracking-wide">
                      {selectedPlayer.firstName} {selectedPlayer.lastName}
                    </h1>
                    
                    <p className="text-lg text-gray-600 mb-4 font-light">
                      {selectedPlayer.email}
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      <span className="px-4 py-2 bg-white bg-opacity-80 text-blue-700 rounded-full text-sm font-medium shadow-sm">
                        Active Player
                      </span>
                      {selectedPlayer.pplId && (
                        <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-sm">
                          PPL: {selectedPlayer.pplId}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-10">
                  {/* Statistics Cards */}
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-100 shadow-sm">
                      <div className="text-3xl font-light text-blue-700 mb-2">
                        {calculateAge(selectedPlayer.birthDate)}
                      </div>
                      <div className="text-sm text-blue-600 font-medium uppercase tracking-wider">
                        Years Old
                      </div>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-100 shadow-sm">
                      <div className="text-3xl font-light text-emerald-700 mb-2 capitalize">
                        {selectedPlayer.gender || 'N/A'}
                      </div>
                      <div className="text-sm text-emerald-600 font-medium uppercase tracking-wider">
                        Gender
                      </div>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-100 shadow-sm">
                      <div className="text-3xl font-light text-purple-700 mb-2">
                        {selectedPlayer.duprId || 'N/A'}
                      </div>
                      <div className="text-sm text-purple-600 font-medium uppercase tracking-wider">
                        DUPR ID
                      </div>
                    </div>
                  </div>

                  {/* Information Sections */}
                  <div className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h2 className="text-2xl font-light text-gray-800 mb-6 pb-2 border-b border-gray-200">
                        Personal Information
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Birth Date
                          </h3>
                          <p className="text-lg text-gray-800 font-medium">
                            {formatDate(selectedPlayer.birthDate)}
                          </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Registration Date
                          </h3>
                          <p className="text-lg text-gray-800 font-medium">
                            {formatDate(selectedPlayer.createdAt)}
                          </p>
                        </div>

                        {selectedPlayer.address && (
                          <div className="bg-gray-50 p-6 rounded-xl md:col-span-2">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                              Address
                            </h3>
                            <p className="text-lg text-gray-800 font-medium">
                              {selectedPlayer.address}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Account Information */}
                    <div>
                      <h2 className="text-2xl font-light text-gray-800 mb-6 pb-2 border-b border-gray-200">
                        Account Details
                      </h2>
                      
                      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-xl border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                              Account Status
                            </h3>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                              <span className="text-lg text-gray-800 font-medium">Active Player</span>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                              User Roles
                            </h3>
                            <p className="text-lg text-gray-800 font-medium">
                              {selectedPlayer.roles?.join(', ') || 'Player'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end space-x-4 mt-12 pt-8 border-t border-gray-200">
                    <Button 
                      size="large" 
                      onClick={() => setShowPlayerInfoModal(false)}
                      className="px-8 py-2 h-auto text-gray-600 border-gray-300 hover:border-gray-400 hover:text-gray-700 rounded-lg"
                    >
                      Close
                    </Button>
                    <Button
                      type="primary"
                      size="large"
                      onClick={() => {
                        setShowPlayerInfoModal(false);
                        openEditModal(selectedPlayer);
                      }}
                      className="px-8 py-2 h-auto bg-blue-600 hover:bg-blue-700 border-0 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      Edit Player
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Modal>

          {/* Edit Modal */}
          <Modal
            title={
              <div className="flex items-center">
                <FaEdit className="mr-2 text-blue-500" />
                <span>Edit Player</span>
              </div>
            }
            open={showEditModal}
            onCancel={() => setShowEditModal(false)}
            onOk={handleEditSubmit}
            okText="Save Changes"
            cancelText="Cancel"
            width={600}
            className="top-8"
            okButtonProps={{ 
              className: 'bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600',
              size: 'large'
            }}
            cancelButtonProps={{ size: 'large' }}
          >
            <Form layout="vertical" form={editForm} onFinish={handleEditSubmit} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>

              <Form.Item label="Email" name="email">
                <Input placeholder="Email" size="large" type="email" />
              </Form.Item>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item label="Birth Date" name="birthDate">
                  <Input type="date" size="large" />
                </Form.Item>

                <Form.Item label="Gender" name="gender">
                  <Select size="large" placeholder="Select Gender">
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                  </Select>
                </Form.Item>
              </div>

              <Form.Item label="DUPR ID" name="duprId">
                <Input placeholder="DUPR ID (optional)" size="large" />
              </Form.Item>
            </Form>
          </Modal>

          {/* Delete Modal */}
          <Modal
            title={
              <div className="flex items-center text-red-600">
                <FaTrash className="mr-2" />
                <span>Confirm Deletion</span>
              </div>
            }
            open={showDeleteModal}
            onCancel={() => setShowDeleteModal(false)}
            onOk={handleDeleteConfirmed}
            okText="Delete Player"
            cancelText="Cancel"
            okButtonProps={{ 
              danger: true, 
              size: 'large',
              className: 'bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600'
            }}
            cancelButtonProps={{ size: 'large' }}
          >
            <div className="py-4">
              <p className="text-lg mb-4">
                Are you sure you want to delete this player?
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">
                  {selectedPlayer?.firstName} {selectedPlayer?.lastName}
                </p>
                <p className="text-gray-600">{selectedPlayer?.email}</p>
                <p className="text-sm text-gray-500 mt-2">
                  PPL ID: {selectedPlayer?.pplId || 'N/A'}
                </p>
              </div>
              <p className="text-red-600 text-sm mt-4">
                ⚠️ This action cannot be undone.
              </p>
            </div>
          </Modal>

          {/* Add Modal */}
          <Modal
            title={
              <div className="flex items-center">
                <FaPlus className="mr-2 text-green-500" />
                <span>Add New Player</span>
              </div>
            }
            open={showAddModal}
            onCancel={() => setShowAddModal(false)}
            onOk={() => addForm.submit()}
            okText="Add Player"
            cancelText="Cancel"
            width={600}
            className="top-8"
            okButtonProps={{ 
              className: 'bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600',
              size: 'large'
            }}
            cancelButtonProps={{ size: 'large' }}
          >
            <Form layout="vertical" form={addForm} onFinish={handleAddSubmit} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>

              <Form.Item label="Email" name="email">
                <Input placeholder="Email (optional - will auto-generate if empty)" size="large" type="email" />
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input.Password placeholder="Password (optional - will auto-generate if empty)" size="large" />
              </Form.Item>

              <Form.Item label="Address" name="address">
                <Input placeholder="Address (optional)" size="large" />
              </Form.Item>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item label="Birth Date" name="birthDate">
                  <Input type="date" size="large" />
                </Form.Item>

                <Form.Item label="Gender" name="gender">
                  <Select size="large" placeholder="Select Gender">
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                  </Select>
                </Form.Item>
              </div>

              <Form.Item label="DUPR ID" name="duprId">
                <Input placeholder="DUPR ID (optional)" size="large" />
              </Form.Item>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> If email or password are left empty, they will be auto-generated. 
                  The generated password will be shown after successful registration.
                </p>
              </div>
            </Form>
          </Modal>
        </main>
      </section>
    </div>
  );
};

export default Players;
