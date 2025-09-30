import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Table, Input, Space } from 'antd';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('/api/logs');
        setLogs(response.data);
      } catch (err) {
        console.error('Error fetching logs:', err);
      }
    };

    fetchLogs();
  }, []);

  const filteredLogs = logs.filter((log) => {
    const fieldsToSearch = [
      log?.action,
      log?.role,
      log?.userId?.firstName,
      log?.userId?.lastName,
      log?.userId?.email,
    ];

    return fieldsToSearch.some((field) =>
      typeof field === 'string' &&
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const columns = [
    {
      title: '🧑 User',
      dataIndex: 'userId',
      key: 'user',
      render: (userId) =>
        userId
          ? `${userId.firstName || ''} ${userId.lastName || ''}`.trim()
          : 'Deleted User',
    },
    {
      title: '📧 Email',
      dataIndex: ['userId', 'email'],
      key: 'email',
      render: (email) => email || 'N/A',
    },
    {
      title: '🔐 Role',
      dataIndex: 'role',
      key: 'role',
      render: (role) => {
        const roleStr = String(role || 'N/A');
        return roleStr.charAt(0).toUpperCase() + roleStr.slice(1);
      },
    },
    {
      title: '📌 Action',
      dataIndex: 'action',
      key: 'action',
      render: (action) => action || 'N/A',
    },
    {
      title: '🕒 Time',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (timestamp) =>
        new Date(timestamp).toLocaleString('en-US', {
          timeZone: 'Asia/Manila',
        }),
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <Navbar />
        <div className="p-5 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">📜 Logs</h1>
          <Space style={{ marginBottom: 16 }}>
            <Input
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
          </Space>
          <Table
            columns={columns}
            dataSource={filteredLogs}
            rowKey="_id"
            pagination={{ pageSize: 10 }}
            scroll={{ x: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default Logs;
