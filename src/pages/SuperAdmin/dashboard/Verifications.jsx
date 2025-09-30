import React from 'react';
import { Card, Table, Button, Tag, Space, Typography } from 'antd';
import { CheckOutlined, CloseOutlined, EyeOutlined } from '@ant-design/icons';

const { Title } = Typography;

const SuperAdminVerifications = () => {
  const columns = [
    {
      title: 'User',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => (
        <Tag color={type === 'coach' ? 'blue' : type === 'organizer' ? 'green' : 'orange'}>
          {type.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'approved' ? 'green' : status === 'pending' ? 'orange' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Submitted Date',
      dataIndex: 'submittedDate',
      key: 'submittedDate',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EyeOutlined />} size="small" />
          <Button icon={<CheckOutlined />} size="small" type="primary" />
          <Button icon={<CloseOutlined />} size="small" danger />
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      userName: 'John Doe',
      type: 'coach',
      status: 'pending',
      submittedDate: '2024-01-15',
    },
    {
      key: '2',
      userName: 'Jane Smith',
      type: 'organizer',
      status: 'approved',
      submittedDate: '2024-01-14',
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Verification Requests</Title>
      
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

export default SuperAdminVerifications;