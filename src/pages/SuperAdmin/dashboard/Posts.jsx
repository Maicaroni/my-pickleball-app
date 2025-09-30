import React from 'react';
import { Card, Table, Button, Tag, Space, Typography } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const SuperAdminPosts = () => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'published' ? 'green' : status === 'draft' ? 'orange' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EyeOutlined />} size="small" />
          <Button icon={<EditOutlined />} size="small" />
          <Button icon={<DeleteOutlined />} size="small" danger />
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      title: 'Welcome to Pickleball Philippines',
      author: 'Admin',
      status: 'published',
      createdDate: '2024-01-15',
    },
    {
      key: '2',
      title: 'Tournament Guidelines Update',
      author: 'Moderator',
      status: 'draft',
      createdDate: '2024-01-14',
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Posts Management</Title>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={data}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
};

export default SuperAdminPosts;