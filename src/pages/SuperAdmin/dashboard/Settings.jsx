import React from 'react';
import { Card, Form, Input, Button, Switch, Typography, Divider } from 'antd';

const { Title } = Typography;

const SuperAdminSettings = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Settings updated:', values);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>System Settings</Title>
      
      <Card title="Platform Configuration">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            platformName: 'Pickleball Philippines',
            maintenanceMode: false,
            userRegistration: true,
            emailNotifications: true,
          }}
        >
          <Form.Item
            label="Platform Name"
            name="platformName"
            rules={[{ required: true, message: 'Please enter platform name' }]}
          >
            <Input />
          </Form.Item>
          
          <Divider />
          
          <Form.Item
            label="Maintenance Mode"
            name="maintenanceMode"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          
          <Form.Item
            label="Allow User Registration"
            name="userRegistration"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          
          <Form.Item
            label="Email Notifications"
            name="emailNotifications"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Settings
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SuperAdminSettings;