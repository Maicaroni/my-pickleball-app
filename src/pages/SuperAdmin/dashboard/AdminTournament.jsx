import React, { useEffect, useState } from "react";
import axios from "../../../utils/axiosConfig";
import Sidebar from "../../../components/Superadmin/SuperAdminSidebar";
import Navbar from "../../../components/Superadmin/SuperAdminNavbar";
import { Button, Modal, message, Input, Select, DatePicker, Card, Statistic, Row, Col, Tag, Tooltip } from "antd";
import { FaEye, FaTrash, FaEdit, FaTrophy, FaCalendar, FaUsers, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import { useSuperAdminAuth } from "../../../contexts/SuperAdminAuthContext";

const { RangePicker } = DatePicker;
const { Option } = Select;

const SuperAdminTournaments = () => {
  const { getToken } = useSuperAdminAuth();
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] = useState(null);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [tournamentModalOpen, setTournamentModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [tournamentToDelete, setTournamentToDelete] = useState(null);

  const token = getToken();

  const fetchTournaments = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await axios.get("/tournaments", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTournaments(res.data);
    } catch (error) {
      console.error("Get tournaments error:", error.response || error);
      message.error("Failed to fetch tournaments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const handleDeleteClick = (tournament) => {
    setTournamentToDelete(tournament);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!tournamentToDelete) return;
    try {
      await axios.delete(`/tournaments/${tournamentToDelete._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      message.success("Tournament deleted successfully!");
      setTournaments((prev) =>
        prev.filter((t) => t._id !== tournamentToDelete._id)
      );
    } catch (err) {
      console.error(err);
      message.error("Failed to delete tournament.");
    } finally {
      setDeleteModalOpen(false);
      setTournamentToDelete(null);
    }
  };

  const getTournamentStatus = (tournament) => {
    const now = new Date();
    const startDate = new Date(tournament.tournamentDates?.[0]);
    const endDate = new Date(tournament.tournamentDates?.[tournament.tournamentDates.length - 1]);
    
    if (now < startDate) return "upcoming";
    if (now >= startDate && now <= endDate) return "ongoing";
    return "completed";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming": return "blue";
      case "ongoing": return "green";
      case "completed": return "gray";
      default: return "default";
    }
  };

  const filteredTournaments = tournaments.filter((tournament) => {
    const nameMatch = tournament.tournamentName?.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = tournament.tournamentCategories?.some(
      (cat) => cat.division?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const venueMatch = tournament.venueName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      tournament.venueCity?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const searchMatch = nameMatch || categoryMatch || venueMatch;
    
    const status = getTournamentStatus(tournament);
    const statusMatch = statusFilter === "all" || status === statusFilter;
    
    let dateMatch = true;
    if (dateRange && dateRange.length === 2) {
      const tournamentDate = new Date(tournament.tournamentDates?.[0]);
      dateMatch = tournamentDate >= dateRange[0] && tournamentDate <= dateRange[1];
    }
    
    return searchMatch && statusMatch && dateMatch;
  });

  const tournamentStats = {
    total: tournaments.length,
    upcoming: tournaments.filter(t => getTournamentStatus(t) === "upcoming").length,
    ongoing: tournaments.filter(t => getTournamentStatus(t) === "ongoing").length,
    completed: tournaments.filter(t => getTournamentStatus(t) === "completed").length,
  };

  return (
    <div className="app">
      <Sidebar />
      <section id="content" className="players-content">
        <Navbar />
        <main className="p-6 max-w-screen-xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-extrabold text-nuBlue mb-2">Tournament Management</h1>
            <p className="text-gray-600">Manage and monitor all tournaments in the system</p>
          </div>

          {/* Statistics Cards */}
          <Row gutter={[16, 16]} className="mb-6">
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="Total Tournaments"
                  value={tournamentStats.total}
                  prefix={<FaTrophy className="text-yellow-500" />}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="Upcoming"
                  value={tournamentStats.upcoming}
                  prefix={<FaCalendar className="text-blue-500" />}
                  valueStyle={{ color: '#52c41a' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="Ongoing"
                  value={tournamentStats.ongoing}
                  prefix={<FaUsers className="text-green-500" />}
                  valueStyle={{ color: '#faad14' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card>
                <Statistic
                  title="Completed"
                  value={tournamentStats.completed}
                  prefix={<FaTrophy className="text-gray-500" />}
                  valueStyle={{ color: '#8c8c8c' }}
                />
              </Card>
            </Col>
          </Row>

          {/* Filters */}
          <Card className="mb-6">
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} sm={12} md={8}>
                <Input
                  placeholder="Search tournaments, categories, or venues..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: "100%" }}
                  allowClear
                />
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Select
                  placeholder="Filter by status"
                  value={statusFilter}
                  onChange={setStatusFilter}
                  style={{ width: "100%" }}
                >
                  <Option value="all">All Status</Option>
                  <Option value="upcoming">Upcoming</Option>
                  <Option value="ongoing">Ongoing</Option>
                  <Option value="completed">Completed</Option>
                </Select>
              </Col>
              <Col xs={24} sm={24} md={10}>
                <RangePicker
                  placeholder={["Start Date", "End Date"]}
                  value={dateRange}
                  onChange={setDateRange}
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
          </Card>

          {loading ? (
            <Card>
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nuBlue mx-auto mb-4"></div>
                <p className="text-lg text-gray-600">Loading tournaments...</p>
              </div>
            </Card>
          ) : (
            <Card>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white table-auto">
                  <thead className="bg-gradient-to-r from-nuBlue to-blue-600 text-white">
                    <tr>
                      <th className="py-4 px-6 text-left font-semibold">Tournament</th>
                      <th className="py-4 px-6 text-left font-semibold">Status</th>
                      <th className="py-4 px-6 text-left font-semibold">Categories</th>
                      <th className="py-4 px-6 text-left font-semibold">Venue & Date</th>
                      <th className="py-4 px-6 text-left font-semibold">Entry Fee</th>
                      <th className="py-4 px-6 text-center font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTournaments.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-16">
                          <div className="text-gray-400">
                            <FaTrophy className="text-4xl mx-auto mb-4 opacity-50" />
                            <p className="text-lg">No tournaments found</p>
                            <p className="text-sm">Try adjusting your search or filters</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredTournaments.map((tournament) => {
                        const status = getTournamentStatus(tournament);
                        return (
                          <tr key={tournament._id} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-6">
                              <div>
                                <h3 className="font-semibold text-gray-900 mb-1">
                                  {tournament.tournamentName}
                                </h3>
                                <p className="text-sm text-gray-600 flex items-center">
                                  <FaMapMarkerAlt className="mr-1" />
                                  {tournament.venueName}, {tournament.venueCity}
                                </p>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <Tag color={getStatusColor(status)} className="capitalize">
                                {status}
                              </Tag>
                            </td>
                            <td className="py-4 px-6">
                              <div className="space-y-1">
                                {tournament.tournamentCategories?.slice(0, 2).map((cat) => (
                                  <div key={cat._id} className="text-sm">
                                    <span className="font-medium">{cat.division || "N/A"}</span>
                                    <span className="text-gray-500"> ({cat.skillLevel})</span>
                                  </div>
                                ))}
                                {tournament.tournamentCategories?.length > 2 && (
                                  <div className="text-xs text-blue-600">
                                    +{tournament.tournamentCategories.length - 2} more
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="text-sm">
                                <div className="flex items-center mb-1">
                                  <FaCalendar className="mr-1 text-gray-400" />
                                  {tournament.tournamentDates?.map((d) => 
                                    new Date(d).toLocaleDateString()
                                  ).join(", ")}
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center text-sm">
                                <FaDollarSign className="mr-1 text-green-500" />
                                {tournament.entryFeeMin && tournament.entryFeeMax ? 
                                  `$${tournament.entryFeeMin} - $${tournament.entryFeeMax}` : 
                                  "TBD"
                                }
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex gap-2 justify-center flex-wrap">
                                <Tooltip title="View Details">
                                  <Button
                                    type="primary"
                                    icon={<FaEye />}
                                    size="small"
                                    onClick={() => {
                                      setSelectedTournament(tournament);
                                      setTournamentModalOpen(true);
                                    }}
                                  />
                                </Tooltip>
                                <Tooltip title="Edit Tournament">
                                  <Button
                                    icon={<FaEdit />}
                                    size="small"
                                    onClick={() => message.info("Edit feature coming soon!")}
                                  />
                                </Tooltip>
                                <Tooltip title="Delete Tournament">
                                  <Button
                                    danger
                                    icon={<FaTrash />}
                                    size="small"
                                    onClick={() => handleDeleteClick(tournament)}
                                  />
                                </Tooltip>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* Delete Modal */}
          <Modal
            title={
              <div className="flex items-center">
                <FaTrash className="mr-2 text-red-500" />
                Confirm Deletion
              </div>
            }
            open={deleteModalOpen}
            onCancel={() => setDeleteModalOpen(false)}
            onOk={handleDeleteConfirm}
            okText="Delete Tournament"
            cancelText="Cancel"
            okButtonProps={{ 
              danger: true, 
              style: { borderRadius: "6px" },
              icon: <FaTrash />
            }}
            cancelButtonProps={{ style: { borderRadius: "6px" } }}
            destroyOnHidden
          >
            <div className="py-4">
              <p className="text-lg mb-2">Are you sure you want to delete this tournament?</p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="font-semibold text-red-800">{tournamentToDelete?.tournamentName}</p>
                <p className="text-red-600 text-sm">This action cannot be undone.</p>
              </div>
            </div>
          </Modal>

          {/* Tournament Details Modal */}
          <Modal
            title={
              <div className="flex items-center">
                <FaTrophy className="mr-2 text-yellow-500" />
                {selectedTournament?.tournamentName || "Tournament Details"}
              </div>
            }
            open={tournamentModalOpen}
            onCancel={() => setTournamentModalOpen(false)}
            footer={null}
            width={800}
            destroyOnHidden
          >
            <div style={{ maxHeight: "70vh", overflowY: "auto" }} className="pr-2">
              {selectedTournament && (
                <div className="space-y-6">
                  {/* Status and Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Status</h4>
                      <Tag color={getStatusColor(getTournamentStatus(selectedTournament))} size="large">
                        {getTournamentStatus(selectedTournament).toUpperCase()}
                      </Tag>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Entry Fee Range</h4>
                      <p className="flex items-center">
                        <FaDollarSign className="mr-1 text-green-500" />
                        {selectedTournament.entryFeeMin && selectedTournament.entryFeeMax ? 
                          `$${selectedTournament.entryFeeMin} - $${selectedTournament.entryFeeMax}` : 
                          "To be determined"
                        }
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="whitespace-pre-wrap text-gray-800">
                        {selectedTournament.description || "No description provided"}
                      </p>
                    </div>
                  </div>

                  {/* Venue and Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Venue Information</h4>
                      <div className="space-y-2">
                        <p className="flex items-center">
                          <FaMapMarkerAlt className="mr-2 text-red-500" />
                          <strong>Venue:</strong> <span className="ml-1">{selectedTournament.venueName}</span>
                        </p>
                        <p className="flex items-center">
                          <FaMapMarkerAlt className="mr-2 text-red-500" />
                          <strong>City:</strong> <span className="ml-1">{selectedTournament.venueCity}</span>
                        </p>
                        <p className="flex items-center">
                          <FaCalendar className="mr-2 text-blue-500" />
                          <strong>Dates:</strong> <span className="ml-1">
                            {selectedTournament.tournamentDates?.map((d) => 
                              new Date(d).toLocaleDateString()
                            ).join(", ")}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Contact Information</h4>
                      <div className="space-y-2">
                        <p><strong>Email:</strong> {selectedTournament.contactEmail}</p>
                        <p><strong>Phone:</strong> {selectedTournament.contactPhone || "Not provided"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  {(selectedTournament.registrationInstructions || selectedTournament.prizePool || selectedTournament.rules || selectedTournament.events) && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-700">Additional Information</h4>
                      {selectedTournament.registrationInstructions && (
                        <div>
                          <p className="font-medium text-gray-600">Registration Instructions:</p>
                          <p className="text-gray-800">{selectedTournament.registrationInstructions}</p>
                        </div>
                      )}
                      {selectedTournament.prizePool && (
                        <div>
                          <p className="font-medium text-gray-600">Prize Pool:</p>
                          <p className="text-gray-800">{selectedTournament.prizePool}</p>
                        </div>
                      )}
                      {selectedTournament.rules && (
                        <div>
                          <p className="font-medium text-gray-600">Rules:</p>
                          <p className="text-gray-800">{selectedTournament.rules}</p>
                        </div>
                      )}
                      {selectedTournament.events && (
                        <div>
                          <p className="font-medium text-gray-600">Events:</p>
                          <p className="text-gray-800">{selectedTournament.events}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Categories */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Tournament Categories</h4>
                    {selectedTournament.tournamentCategories?.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedTournament.tournamentCategories.map((cat) => (
                          <div key={cat._id} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <h5 className="font-semibold text-blue-800">
                              {cat.division || "N/A"}
                              {cat.ageCategory && <span className="text-blue-600"> ({cat.ageCategory})</span>}
                            </h5>
                            <p className="text-sm text-blue-700">
                              <strong>Skill Level:</strong> {cat.skillLevel || "N/A"}
                            </p>
                            <p className="text-sm text-blue-700">
                              <strong>Max Participants:</strong> {cat.maxParticipants || "Unlimited"}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 italic">No categories defined</p>
                    )}
                  </div>

                  {/* Payment Methods */}
                  {selectedTournament.paymentMethods?.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Payment Methods</h4>
                      <div className="space-y-3">
                        {selectedTournament.paymentMethods.map((pm, index) => (
                          <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p><strong>Bank:</strong> {pm.bankName}</p>
                                <p><strong>Account Name:</strong> {pm.accountName}</p>
                                <p><strong>Account Number:</strong> {pm.accountNumber}</p>
                              </div>
                              {pm.qrCodeImage && (
                                <div className="flex justify-center">
                                  <img 
                                    src={`http://localhost:5000${pm.qrCodeImage}`} 
                                    alt="Payment QR Code" 
                                    className="max-w-32 h-auto border rounded-lg shadow-sm"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tournament Image */}
                  {selectedTournament.tournamentPicture && (
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Tournament Image</h4>
                      <div className="text-center">
                        <img
                          src={`http://localhost:5000${selectedTournament.tournamentPicture}`}
                          alt="Tournament"
                          className="max-w-full h-auto rounded-lg shadow-lg border"
                          style={{ maxHeight: "400px" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Modal>
        </main>
      </section>
    </div>
  );
};

export default SuperAdminTournaments;