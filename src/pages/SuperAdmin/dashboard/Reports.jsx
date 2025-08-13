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

  // Resolve report
  const handleResolve = async (reportId) => {
    try {
      const token = localStorage.getItem('superadminToken');
      if (!token) {
        message.error('No token found');
        return;
      }

      await axios.put(
        `http://localhost:5000/api/reports/${reportId}/resolve`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      message.success('Report marked as resolved!');
      fetchReports();
    } catch (err) {
      console.error(err);
      message.error('Failed to resolve report.');
    }
  };

  // Delete report
  const handleDeleteConfirmed = async () => {
    if (!selectedReport) return;
    try {
      const token = localStorage.getItem('superadminToken');
      if (!token) {
        message.error('No token found');
        return;
      }

      await axios.delete(
        `http://localhost:5000/api/reports/${selectedReport._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setReports(reports.filter((r) => r._id !== selectedReport._id));
      setShowDeleteModal(false);
      message.success('Report deleted.');
    } catch (err) {
      console.error(err);
      message.error('Failed to delete report.');
    }
  };

  // Filter reports for current page
  const startIndex = (currentPage - 1) * pageSize;
  const currentReports = reports.slice(startIndex, startIndex + pageSize);

  return (
    <div className="app">
      <Sidebar />
      <section id="content" className="players-content">
        <Navbar />
        <main className="p-6 max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-extrabold text-nuBlue mb-8">Reports</h1>

          {loading ? (
            <div className="loading-spinner text-center text-lg py-10">
              Loading...
            </div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
                <table className="min-w-full bg-white rounded-lg table-auto border-collapse">
                  <thead className="bg-nuBlue text-white rounded-t-lg">
                    <tr>
                      <th className="py-4 px-8 text-left text-lg font-semibold">
                        Report ID
                      </th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">
                        Post Content
                      </th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">
                        Reported By
                      </th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">
                        Reason
                      </th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">
                        Status
                      </th>
                      <th className="py-4 px-8 text-left text-lg font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentReports.length === 0 ? (
                      <tr>
                        <td
                          colSpan={6}
                          className="text-center py-10 text-gray-500 text-lg font-light"
                        >
                          No reports found.
                        </td>
                      </tr>
                    ) : (
                      currentReports.map((report) => (
                        <tr
                          key={report._id}
                          className="border-b hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-4 px-8 text-base">
                            {report._id.slice(-6)}
                          </td>
                          <td className="py-4 px-8">
                            {report.post?.content || '-'}
                          </td>
                          <td className="py-4 px-8">
                            {report.reportedBy
                              ? `${report.reportedBy.firstName} ${report.reportedBy.lastName}`
                              : '-'}
                          </td>
                          <td className="py-4 px-8">
                            {report.reason}
                            {report.customReason
                              ? `: ${report.customReason}`
                              : ''}
                          </td>
                          <td className="py-4 px-8">
                            {report.resolved ? (
                              <Tag color="green">Resolved</Tag>
                            ) : (
                              <Tag color="red">Pending</Tag>
                            )}
                          </td>
                          <td className="py-4 px-8 flex gap-4">
                            {!report.resolved && (
                              <Button
                                type="primary"
                                icon={<FaCheck />}
                                onClick={() => handleResolve(report._id)}
                              >
                                Resolve
                              </Button>
                            )}
                            <Button
                              danger
                              icon={<FaTrash />}
                              onClick={() => {
                                setSelectedReport(report);
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
              {reports.length > pageSize && (
                <div className="flex justify-center mt-6">
                  <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={reports.length}
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
