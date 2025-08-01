import React, { useState, useEffect } from 'react';
import { Table, Input, Spin, Button, Modal } from 'antd';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { toast } from 'react-hot-toast';
import '../style.css';

const { Search } = Input;

const SuperAdminReports = () => {
  const [reports, setReports] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/reports');
      setReports(res.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
      toast.error('Failed to load reports.');
    } finally {
      setLoading(false);
    }
  };

  const handleResolve = async (id) => {
    Modal.confirm({
      title: 'Resolve Report',
      content: 'Are you sure you want to mark this report as resolved?',
      onOk: async () => {
        try {
          setConfirmLoading(true);
          await axios.put(`/api/reports/${id}/resolve`);
          toast.success('Report resolved!');
          fetchReports();
        } catch (error) {
          console.error('Resolve error:', error);
          toast.error('Failed to resolve report.');
        } finally {
          setConfirmLoading(false);
        }
      }
    });
  };

  const filteredReports = reports.filter((report) =>
    Object.values(report).some((val) =>
      typeof val === 'string' && val.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const columns = [
    {
      title: 'Reported User',
      dataIndex: ['reportedUser', 'email'],
      render: (email) => email || 'N/A',
    },
    {
      title: 'Reported By',
      dataIndex: ['reportedBy', 'email'],
      render: (email) => email || 'N/A',
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      render: (date) => new Date(date).toLocaleString(),
    },
    {
      title: 'Action',
      render: (_, record) => (
        <Button
          type="primary"
          danger
          disabled={record.resolved}
          onClick={() => handleResolve(record._id)}
          loading={confirmLoading}
        >
          {record.resolved ? 'Resolved' : 'Mark as Resolved'}
        </Button>
      ),
    },
  ];

  return (
    <div className="app">
      <Sidebar />
      <section id="content">
        <Navbar />

        <main>
          <h1 className="title">User Reports</h1>
          <ul className="breadcrumbs">
            <li><a href="#">Home</a></li>
            <li className="divider">/</li>
            <li><a className="active">Reports</a></li>
          </ul>

          <div className="data">
            <div className="content-data">
              <div className="head" style={{ justifyContent: 'flex-end' }}>
                <Search
                  placeholder="Search reports"
                  enterButton
                  allowClear
                  onSearch={(value) => setSearchQuery(value)}
                  style={{ maxWidth: '300px', marginBottom: '20px' }}
                />
              </div>

              {loading ? (
                <div className="loading-spinner">
                  <Spin tip="Loading reports..." />
                </div>
              ) : (
                <Table
                  columns={columns}
                  dataSource={filteredReports}
                  rowKey="_id"
                  pagination={{ pageSize: 10 }}
                  className="table-responsive"
                />
              )}
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default SuperAdminReports;
