import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Modal, Button, message, Pagination, Tag, Tabs, Card, Space, Tooltip, Badge, Empty, Input } from 'antd';
import { FaTrash, FaCheck, FaEye, FaArchive, FaExclamationTriangle, FaUser, FaClock, FaUndo } from 'react-icons/fa';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedAttachment, setSelectedAttachment] = useState(null);
  const [activeTab, setActiveTab] = useState('pending');
  
  // Reason modal states
  const [reasonModalOpen, setReasonModalOpen] = useState(false);
  const [removalReason, setRemovalReason] = useState('');
  const [pendingReportIds, setPendingReportIds] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Fetch reports
  const fetchReports = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/reports'); 
      // Make sure backend populates post.author
      setReports(res.data);
    } catch (err) {
      console.error('Error fetching reports:', err);
      message.error(err.response?.data?.message || 'Failed to fetch reports');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleResolve = async (reportIds) => {
    console.log('handleResolve called with reportIds:', reportIds);
    // Store the report IDs and open the reason modal
    setPendingReportIds(reportIds);
    setReasonModalOpen(true);
  };

  const handleResolveWithReason = async () => {
    if (!removalReason.trim()) {
      message.error('Please provide a reason for removing the post.');
      return;
    }

    try {
      const token = localStorage.getItem('superadminToken');
      console.log('Token found:', !!token);
      if (!token) return message.error('No token found');

      console.log('Making API requests to resolve reports with reason:', removalReason);
      await Promise.all(
        pendingReportIds.map((id) =>
          axios.put(
            `/api/reports/${id}/resolve`,
            { reason: removalReason },
            { headers: { Authorization: `Bearer ${token}` } }
          )
        )
      );

      console.log('Reports resolved successfully');
      message.success('Report(s) marked as resolved!');
      
      // Reset modal state
      setReasonModalOpen(false);
      setRemovalReason('');
      setPendingReportIds([]);
      
      fetchReports();
    } catch (err) {
      console.error('Error resolving reports:', err);
      message.error('Failed to resolve report(s).');
    }
  };

  const handleDeleteConfirmed = async () => {
    if (!selectedReport) return;
    try {
      const token = localStorage.getItem('superadminToken');
      if (!token) return message.error('No token found');

      await axios.delete(
        `/api/reports/${selectedReport._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setReports(reports.filter((r) => r._id !== selectedReport._id));
      setShowDeleteModal(false);
      message.success('Report deleted.');
    } catch (err) {
      console.error(err);
      message.error('Failed to delete report.');
    }
  };

  const handleArchive = async (reportIds) => {
    try {
      const token = localStorage.getItem('superadminToken');
      if (!token) return message.error('No token found');

      await Promise.all(
        reportIds.map((id) =>
          axios.put(
            `/api/reports/${id}/archive`,
            {},
            { headers: { Authorization: `Bearer ${token}` } }
          )
        )
      );

      message.success('Report(s) archived!');
      fetchReports();
    } catch (err) {
      console.error(err);
      message.error('Failed to archive report(s).');
    }
  };

  const handleRevert = async (reportIds) => {
    try {
      const token = localStorage.getItem('superadminToken');
      if (!token) return message.error('No token found');

      await Promise.all(
        reportIds.map((id) =>
          axios.put(
            `/api/reports/${id}/revert`,
            {},
            { headers: { Authorization: `Bearer ${token}` } }
          )
        )
      );

      message.success('Report(s) reverted to pending!');
      fetchReports();
    } catch (err) {
      console.error(err);
      message.error('Failed to revert report(s).');
    }
  };

  // Group reports by post
  const groupedReports = reports.reduce((acc, report) => {
    const postId = report.post?._id || 'unknown';
    if (!acc[postId]) acc[postId] = { reports: [], post: report.post };
    acc[postId].reports.push(report);
    return acc;
  }, {});

  const groupedReportsArray = Object.values(groupedReports);

  // Filter reports based on active tab
  const getFilteredReports = () => {
    switch (activeTab) {
      case 'pending':
        return groupedReportsArray.filter(group => !group.reports.every(r => r.resolved || r.archived));
      case 'resolved':
        return groupedReportsArray.filter(group => group.reports.every(r => r.resolved) && !group.reports.every(r => r.archived));
      case 'archived':
        return groupedReportsArray.filter(group => group.reports.every(r => r.archived));
      default:
        return groupedReportsArray;
    }
  };

  const filteredReports = getFilteredReports();
  const startIndex = (currentPage - 1) * pageSize;
  const currentReports = filteredReports.slice(startIndex, startIndex + pageSize);

  // Tab change handler
  const handleTabChange = (key) => {
    setActiveTab(key);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  // Get status badge
  const getStatusBadge = (group) => {
    if (group.reports.every(r => r.archived)) {
      return <Badge status="default" text="Archived" />;
    } else if (group.reports.every(r => r.resolved)) {
      return <Badge status="success" text="Resolved" />;
    } else {
      return <Badge status="error" text="Pending" />;
    }
  };

  return (
    <div className="app">
      <Sidebar />
      <section id="content" className="players-content">
        <Navbar />
        <main className="p-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Reports Management</h1>
            <p className="text-gray-600">Monitor and manage user reports across the platform</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nuBlue mx-auto mb-4"></div>
                <p className="text-gray-600">Loading reports...</p>
              </div>
            </div>
          ) : (
            <Card className="shadow-lg border-0">
              <Tabs
                activeKey={activeTab}
                onChange={handleTabChange}
                size="large"
                className="mb-6"
                items={[
                  {
                    key: 'pending',
                    label: (
                      <Space>
                        <FaExclamationTriangle className="text-red-500" />
                        <span>Pending</span>
                        <Badge 
                          count={groupedReportsArray.filter(group => !group.reports.every(r => r.resolved || r.archived)).length} 
                          style={{ backgroundColor: '#f5222d' }}
                        />
                      </Space>
                    ),
                  },
                  {
                    key: 'resolved',
                    label: (
                      <Space>
                        <FaCheck className="text-green-500" />
                        <span>Resolved</span>
                        <Badge 
                          count={groupedReportsArray.filter(group => group.reports.every(r => r.resolved) && !group.reports.every(r => r.archived)).length} 
                          style={{ backgroundColor: '#52c41a' }}
                        />
                      </Space>
                    ),
                  },
                  {
                    key: 'archived',
                    label: (
                      <Space>
                        <FaArchive className="text-gray-500" />
                        <span>Archived</span>
                        <Badge 
                          count={groupedReportsArray.filter(group => group.reports.every(r => r.archived)).length} 
                          style={{ backgroundColor: '#8c8c8c' }}
                        />
                      </Space>
                    ),
                  },
                ]}
              />

              {currentReports.length === 0 ? (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description={
                    <span className="text-gray-500">
                      No {activeTab} reports found
                    </span>
                  }
                />
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg">
                      <thead className="bg-gradient-to-r from-nuBlue to-blue-600 text-white">
                        <tr>
                          <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">Post Info</th>
                          <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">Content</th>
                          <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">Reports</th>
                          <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">Reported By</th>
                          <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">Reasons</th>
                          <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">Status</th>
                          <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {currentReports.map((group, idx) => (
                          <tr key={group.post?._id || idx} className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="py-4 px-6">
                              <div className="flex flex-col">
                                <Tooltip title={group.post?._id || 'Unknown'}>
                                  <span className="text-sm font-mono text-gray-600 cursor-pointer">
                                    {group.post?._id ? `${group.post._id.slice(0, 6)}...${group.post._id.slice(-4)}` : 'Unknown'}
                                  </span>
                                </Tooltip>
                                <span className="text-xs text-gray-400 mt-1">
                                  <FaClock className="inline mr-1" />
                                  {new Date(group.reports[0]?.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <Button
                                type="link"
                                icon={<FaEye />}
                                onClick={() => {
                                  setSelectedPost(group.post);
                                  setPostModalOpen(true);
                                }}
                                className="text-nuBlue hover:text-blue-700"
                              >
                                View Content
                              </Button>
                            </td>
                            <td className="py-4 px-6">
                              <Badge count={group.reports.length} style={{ backgroundColor: '#1890ff' }} />
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex flex-col space-y-1">
                                {group.reports.slice(0, 2).map((r, i) => (
                                  <div key={i} className="flex items-center text-sm">
                                    <FaUser className="text-gray-400 mr-2" />
                                    <span>{r.reportedBy ? `${r.reportedBy.firstName} ${r.reportedBy.lastName}` : 'Anonymous'}</span>
                                  </div>
                                ))}
                                {group.reports.length > 2 && (
                                  <span className="text-xs text-gray-500">+{group.reports.length - 2} more</span>
                                )}
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex flex-wrap gap-1">
                                {[...new Set(group.reports.map(r => r.reason))].slice(0, 2).map((reason, i) => (
                                  <Tag key={i} color="orange" className="text-xs">
                                    {reason}
                                  </Tag>
                                ))}
                                {[...new Set(group.reports.map(r => r.reason))].length > 2 && (
                                  <Tag color="default" className="text-xs">+more</Tag>
                                )}
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              {getStatusBadge(group)}
                            </td>
                            <td className="py-4 px-6">
                              <Space size="small" wrap>
                                {activeTab === 'pending' && (
                                  <>
                                    <Tooltip title="Mark as resolved">
                                      <Button
                                        type="primary"
                                        size="small"
                                        icon={<FaCheck />}
                                        onClick={() => handleResolve(group.reports.map(r => r._id))}
                                        className="bg-green-500 hover:bg-green-600 border-green-500"
                                      >
                                        Resolve
                                      </Button>
                                    </Tooltip>
                                    <Tooltip title="Archive reports">
                                      <Button
                                        size="small"
                                        icon={<FaArchive />}
                                        onClick={() => handleArchive(group.reports.map(r => r._id))}
                                        className="text-gray-600 hover:text-gray-800"
                                      >
                                        Archive
                                      </Button>
                                    </Tooltip>
                                  </>
                                )}
                                {activeTab === 'resolved' && (
                                  <>
                                    <Tooltip title="Revert to pending">
                                      <Button
                                        size="small"
                                        icon={<FaUndo />}
                                        onClick={() => handleRevert(group.reports.map(r => r._id))}
                                        className="text-orange-600 hover:text-orange-800"
                                      >
                                        Revert
                                      </Button>
                                    </Tooltip>
                                    <Tooltip title="Archive reports">
                                      <Button
                                        size="small"
                                        icon={<FaArchive />}
                                        onClick={() => handleArchive(group.reports.map(r => r._id))}
                                        className="text-gray-600 hover:text-gray-800"
                                      >
                                        Archive
                                      </Button>
                                    </Tooltip>
                                  </>
                                )}
                                <Tooltip title="Delete report">
                                  <Button
                                    danger
                                    size="small"
                                    icon={<FaTrash />}
                                    onClick={() => {
                                      setSelectedReport(group.reports[0]);
                                      setShowDeleteModal(true);
                                    }}
                                  >
                                    Delete
                                  </Button>
                                </Tooltip>
                              </Space>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {filteredReports.length > pageSize && (
                    <div className="flex justify-center mt-8">
                      <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={filteredReports.length}
                        onChange={(page) => setCurrentPage(page)}
                        showSizeChanger={false}
                        showQuickJumper
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} reports`}
                      />
                    </div>
                  )}
                </>
              )}
            </Card>
          )}

          {/* Post Modal */}
          <Modal
            title={
              <div className="flex items-center space-x-2">
                <FaEye className="text-nuBlue" />
                <span>Post Content Details</span>
              </div>
            }
            open={postModalOpen}
            onCancel={() => setPostModalOpen(false)}
            footer={null}
            width={800}
            className="post-content-modal"
          >
            <div style={{ maxHeight: '70vh', overflowY: 'auto' }} className="p-4">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">Content:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">{selectedPost?.content}</p>
                </div>
              </div>

              {selectedPost?.images?.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">Attachments:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedPost.images.map((img, idx) => (
                      <div key={idx} className="relative group">
                        <img
                          src={img.url || img}
                          alt={`Attachment ${idx + 1}`}
                          className="w-full h-32 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105 shadow-md"
                          onClick={() => setSelectedAttachment(img.url || img)}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                          <FaEye className="text-white opacity-0 group-hover:opacity-100 text-xl" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Modal>

          {/* Full-size Attachment Modal */}
          <Modal
            title="Attachment Preview"
            open={!!selectedAttachment}
            onCancel={() => setSelectedAttachment(null)}
            footer={null}
            width={900}
            centered
          >
            <div className="flex justify-center">
              {selectedAttachment?.endsWith?.('.pdf') ? (
                <embed src={selectedAttachment} width="100%" height="600px" type="application/pdf" />
              ) : (
                <img
                  src={selectedAttachment}
                  alt="Attachment"
                  style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
                  className="rounded-lg shadow-lg"
                />
              )}
            </div>
          </Modal>

          {/* Delete Modal */}
          <Modal
            title={
              <div className="flex items-center space-x-2 text-red-600">
                <FaTrash />
                <span>Confirm Deletion</span>
              </div>
            }
            open={showDeleteModal}
            onCancel={() => setShowDeleteModal(false)}
            onOk={handleDeleteConfirmed}
            okText="Delete Report"
            cancelText="Cancel"
            okButtonProps={{ 
              danger: true, 
              style: { borderRadius: '6px' },
              icon: <FaTrash />
            }}
            cancelButtonProps={{ style: { borderRadius: '6px' } }}
            destroyOnHidden
          >
            <div className="py-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <FaExclamationTriangle className="text-yellow-500 text-2xl" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">Are you sure you want to delete this report?</p>
                  <p className="text-sm text-gray-500 mt-1">This action cannot be undone.</p>
                </div>
              </div>
            </div>
          </Modal>

          {/* Reason Modal */}
          <Modal
            title={
              <div className="flex items-center space-x-2 text-orange-600">
                <FaExclamationTriangle />
                <span>Provide Removal Reason</span>
              </div>
            }
            open={reasonModalOpen}
            onCancel={() => {
              setReasonModalOpen(false);
              setRemovalReason('');
              setPendingReportIds([]);
            }}
            onOk={handleResolveWithReason}
            okText="Resolve & Notify"
            cancelText="Cancel"
            okButtonProps={{ 
              style: { borderRadius: '6px' },
              icon: <FaCheck />
            }}
            cancelButtonProps={{ style: { borderRadius: '6px' } }}
            destroyOnHidden
          >
            <div className="py-4">
              <div className="mb-4">
                <p className="text-gray-700 mb-3">
                  Please provide a reason for removing this post. This message will be sent to the post author.
                </p>
                <Input.TextArea
                  value={removalReason}
                  onChange={(e) => setRemovalReason(e.target.value)}
                  placeholder="e.g., This post violates our community guidelines regarding inappropriate content..."
                  rows={4}
                  maxLength={500}
                  showCount
                  className="resize-none"
                />
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> The post author will receive a notification with your custom reason along with information about the reports received.
                </p>
              </div>
            </div>
          </Modal>

        </main>
      </section>
    </div>
  );
};

export default Reports;