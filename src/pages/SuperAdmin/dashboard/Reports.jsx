import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Modal, Button, message, Pagination, Tag } from 'antd';
import { FaTrash, FaCheck } from 'react-icons/fa';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  // Fetch reports
  const fetchReports = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/reports');
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

  // Resolve report(s)
  const handleResolve = async (reportIds) => {
    try {
      const token = localStorage.getItem('superadminToken');
      if (!token) return message.error('No token found');

      await Promise.all(
        reportIds.map((id) =>
          axios.put(
            `http://localhost:5000/api/reports/${id}/resolve`,
            {},
            { headers: { Authorization: `Bearer ${token}` } }
          )
        )
      );

      message.success('Report(s) marked as resolved!');
      fetchReports();
    } catch (err) {
      console.error(err);
      message.error('Failed to resolve report(s).');
    }
  };

  // Delete report
  const handleDeleteConfirmed = async () => {
    if (!selectedReport) return;
    try {
      const token = localStorage.getItem('superadminToken');
      if (!token) return message.error('No token found');

      await axios.delete(
        `http://localhost:5000/api/reports/${selectedReport._id}`,
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

  // Group reports by post
  const groupedReports = reports.reduce((acc, report) => {
    const postId = report.post?._id || 'unknown';
    if (!acc[postId]) acc[postId] = { reports: [], post: report.post };
    acc[postId].reports.push(report);
    return acc;
  }, {});

  const groupedReportsArray = Object.values(groupedReports);

  // Pagination
  const startIndex = (currentPage - 1) * pageSize;
  const currentReports = groupedReportsArray.slice(startIndex, startIndex + pageSize);

  return (
    <div className="app">
      <Sidebar />
      <section id="content" className="players-content">
        <Navbar />
        <main className="p-6 max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-extrabold text-nuBlue mb-8">Reports</h1>

          {loading ? (
            <div className="loading-spinner text-center text-lg py-10">Loading...</div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
                <table className="min-w-full bg-white rounded-lg table-auto border-collapse">
                  <thead className="bg-nuBlue text-white rounded-t-lg">
                    <tr>
                      <th className="py-4 px-8 text-left text-lg font-semibold">Post ID</th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">Post Content</th>
                      <th className="py-4 px-8 text-left text-lg font-semibold"># Reports</th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">Reported By</th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">Reason</th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">Status</th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentReports.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-center py-10 text-gray-500 text-lg font-light">
                          No reports found.
                        </td>
                      </tr>
                    ) : (
                      currentReports.map((group, idx) => (
                        <tr key={group.post?._id || idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-8 text-base cursor-pointer" title={group.post?._id || '-'}>
                            {group.post?._id.slice(0, 3) + group.post?._id.slice(-3)}
                          </td>
                          <td className="py-4 px-8">{group.post?.content || '-'}</td>
                          <td className="py-4 px-8 font-semibold">{group.reports.length}</td>
                          <td className="py-4 px-8">
                            {group.reports.map(r => r.reportedBy ? `${r.reportedBy.firstName} ${r.reportedBy.lastName}` : '-').join(', ')}
                          </td>
                          <td className="py-4 px-8">
                            {group.reports.map(r => r.reason + (r.customReason ? `: ${r.customReason}` : '')).join(', ')}
                          </td>
                          <td className="py-4 px-8">
                            {group.reports.every(r => r.resolved) ? <Tag color="green">Resolved</Tag> : <Tag color="red">Pending</Tag>}
                          </td>
                          <td className="py-4 px-8 flex gap-4">
                            {!group.reports.every(r => r.resolved) && (
                              <Button
                                type="primary"
                                icon={<FaCheck />}
                                onClick={() => handleResolve(group.reports.map(r => r._id))}
                              >
                                Resolve All
                              </Button>
                            )}
                            <Button
                              danger
                              icon={<FaTrash />}
                              onClick={() => {
                                setSelectedReport(group.reports[0]); // delete first report for now
                                setShowDeleteModal(true);
                              }}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {groupedReportsArray.length > pageSize && (
                <div className="flex justify-center mt-6">
                  <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={groupedReportsArray.length}
                    onChange={(page) => setCurrentPage(page)}
                    showSizeChanger={false}
                  />
                </div>
              )}
            </>
          )}

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
            destroyOnClose
          >
            <p className="text-lg">
              Are you sure you want to delete this report?
            </p>
          </Modal>
        </main>
      </section>
    </div>
  );
};

export default Reports;
