import React from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import { UserOutlined, TrophyOutlined, TeamOutlined, CalendarOutlined } from '@ant-design/icons';

const { Title } = Typography;

const SuperAdminAnalytics = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Analytics Dashboard</Title>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Users"
              value={1234}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Active Tournaments"
              value={45}
              prefix={<TrophyOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Registered Clubs"
              value={89}
              prefix={<TeamOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Monthly Events"
              value={156}
              prefix={<CalendarOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>
      
      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col span={24}>
          <Card title="Platform Overview">
            <p>Comprehensive analytics and insights for the pickleball platform will be displayed here.</p>
            <p>This section will include user engagement metrics, tournament participation rates, and growth statistics.</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SuperAdminAnalytics;