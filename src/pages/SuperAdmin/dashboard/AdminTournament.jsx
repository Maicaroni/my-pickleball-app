import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/Superadmin/SuperAdminSidebar";
import Navbar from "../../../components/Superadmin/SuperAdminNavbar";
import { Button, Modal, message, Input } from "antd";
import { FaEye, FaTrash, FaEdit } from "react-icons/fa";

const SuperAdminTournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [tournamentModalOpen, setTournamentModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [tournamentToDelete, setTournamentToDelete] = useState(null);

  const token = localStorage.getItem("token");

  const fetchTournaments = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await axios.get("/api/tournaments", {
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
      await axios.delete(`/api/tournaments/${tournamentToDelete._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      message.success("Tournament deleted.");
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

  const filteredTournaments = tournaments.filter((tournament) => {
    const nameMatch = tournament.tournamentName?.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = tournament.tournamentCategories?.some(
      (cat) => cat.division?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return nameMatch || categoryMatch;
  });

  return (
    <div className="app">
      <Sidebar />
      <section id="content" className="players-content">
        <Navbar />
        <main className="p-6 max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-extrabold text-nuBlue mb-4">Tournaments</h1>

          <Input
            placeholder="Search tournaments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ minWidth: "250px", padding: "10px 16px", fontSize: "16px", marginBottom: "16px" }}
            allowClear
          />

          {loading ? (
            <div className="text-center py-10 text-lg">Loading...</div>
          ) : (
            <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
              <table className="min-w-full bg-white rounded-lg table-auto">
                <thead className="bg-nuBlue text-white">
                  <tr>
                    <th className="py-4 px-8 text-left">Name</th>
                    <th className="py-4 px-8 text-left">Category</th>
                    <th className="py-4 px-8 text-left">Date</th>
                    <th className="py-4 px-8 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTournaments.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-10 text-gray-500">
                        No tournaments found.
                      </td>
                    </tr>
                  ) : (
                    filteredTournaments.map((tournament) => (
                      <tr key={tournament._id} className="border-b hover:bg-gray-50 align-top">
                        <td className="py-4 px-8">{tournament.tournamentName}</td>
                        <td className="py-4 px-8">
                          {tournament.tournamentCategories?.map((cat) => (
                            <div key={cat._id}>
                              {cat.division || "N/A"} ({cat.skillLevel})
                            </div>
                          ))}
                        </td>
                        <td className="py-4 px-8">
                          {tournament.tournamentDates?.map((d) => new Date(d).toLocaleDateString()).join(", ")}
                        </td>
                        <td className="py-4 px-8 flex gap-2 flex-wrap">
                          <Button
                            icon={<FaEye />}
                            onClick={() => {
                              setSelectedTournament(tournament);
                              setTournamentModalOpen(true);
                            }}
                          >
                            View
                          </Button>
                          <Button
                            icon={<FaEdit />}
                            className="bg-blue-600 text-white"
                            onClick={() => message.info("Edit feature coming soon!")}
                          >
                            Edit
                          </Button>
                          <Button
                            danger
                            icon={<FaTrash />}
                            onClick={() => handleDeleteClick(tournament)}
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
          )}

          {/* Delete Modal */}
          <Modal
            title="Confirm Deletion"
            open={deleteModalOpen}
            onCancel={() => setDeleteModalOpen(false)}
            onOk={handleDeleteConfirm}
            okText="Delete"
            cancelText="Cancel"
            okButtonProps={{ danger: true, style: { borderRadius: "6px" } }}
            cancelButtonProps={{ style: { borderRadius: "6px" } }}
            destroyOnClose
          >
            <p className="text-lg">Are you sure you want to delete this tournament?</p>
          </Modal>

          {/* Tournament Details Modal */}
          <Modal
            title={selectedTournament?.tournamentName || "Tournament Details"}
            open={tournamentModalOpen}
            onCancel={() => setTournamentModalOpen(false)}
            footer={null}
            width={700}
          >
            <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
              <h3 className="font-semibold mb-2">Description:</h3>
              <p className="mb-4 whitespace-pre-wrap">{selectedTournament?.description}</p>

              <p><strong>Venue:</strong> {selectedTournament?.venueName}, {selectedTournament?.venueCity}</p>
              <p><strong>Dates:</strong> {selectedTournament?.tournamentDates?.map((d) => new Date(d).toLocaleDateString()).join(", ")}</p>
              <p><strong>Registration Instructions:</strong> {selectedTournament?.registrationInstructions}</p>
              <p><strong>Contact:</strong> {selectedTournament?.contactEmail} | {selectedTournament?.contactPhone || "N/A"}</p>
              <p><strong>Entry Fee:</strong> {selectedTournament?.entryFeeMin || "N/A"} to {selectedTournament?.entryFeeMax || "N/A"}</p>
              {selectedTournament?.prizePool && <p><strong>Prize Pool:</strong> {selectedTournament.prizePool}</p>}
              {selectedTournament?.rules && <p><strong>Rules:</strong> {selectedTournament.rules}</p>}
              {selectedTournament?.events && <p><strong>Events:</strong> {selectedTournament.events}</p>}

              <h3 className="font-semibold mt-4 mb-2">Categories:</h3>
              {selectedTournament?.tournamentCategories?.length > 0 ? (
                selectedTournament.tournamentCategories.map((cat) => (
                  <div key={cat._id}>
                    <p>
                      <strong>{cat.division || "N/A"}</strong>
                      {cat.ageCategory ? ` (${cat.ageCategory})` : ""} - 
                      Skill Level: {cat.skillLevel || "N/A"} - 
                      Max Participants: {cat.maxParticipants || "N/A"}
                    </p>
                  </div>
                ))
              ) : (
                <p>No categories added</p>
              )}

              {selectedTournament?.paymentMethods?.length > 0 && (
                <>
                  <h3 className="font-semibold mt-4 mb-2">Payment Methods:</h3>
                  {selectedTournament.paymentMethods.map((pm, index) => (
                    <div key={index}>
                      <p>
                        {pm.bankName} - {pm.accountName} - {pm.accountNumber}
                        {pm.qrCodeImage && <img src={`http://localhost:5000${pm.qrCodeImage}`} alt="QR" style={{ maxWidth: "150px", display: "block", marginTop: "4px" }} />}
                      </p>
                    </div>
                  ))}
                </>
              )}

              {selectedTournament?.tournamentPicture && (
                <div className="mt-4">
                  <img
                    src={`http://localhost:5000${selectedTournament.tournamentPicture}`}
                    alt="Tournament"
                    style={{ width: "100%", borderRadius: "6px", maxHeight: "300px", objectFit: "cover" }}
                  />
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
