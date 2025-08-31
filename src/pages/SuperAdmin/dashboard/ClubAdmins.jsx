import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/Superadmin/SuperAdminSidebar";
import Navbar from "../../../components/Superadmin/SuperAdminNavbar";
import { Button, Modal, message, Input } from "antd";
import { FaTrash, FaUserPlus} from "react-icons/fa";

const SuperAdminClubAdmins = () => {
  const token = localStorage.getItem("superadminToken");

  const [activeTab, setActiveTab] = useState("pending");
  const [clubAdmins, setClubAdmins] = useState({ pending: [], approved: [] });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [allPlayers, setAllPlayers] = useState([]);
  const [searchPlayerTerm, setSearchPlayerTerm] = useState("");
  const [selectedAddPlayer, setSelectedAddPlayer] = useState(null);

  const [promoteModalOpen, setPromoteModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [playerToDelete, setPlayerToDelete] = useState(null);

  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [playerToReject, setPlayerToReject] = useState(null);

  const [revertModalOpen, setRevertModalOpen] = useState(false);
  const [playerToRevert, setPlayerToRevert] = useState(null);

  if (!token) message.error("Token missing. Please login again.");

  useEffect(() => {
    fetchClubAdmins(activeTab);
  }, [activeTab]);

  const fetchClubAdmins = async (status) => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await axios.get(`/api/clubadmins?status=${status}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClubAdmins(prev => ({ ...prev, [status]: res.data.users || [] }));
    } catch (err) {
      console.error(err);
      message.error(err.response?.status === 401
        ? "Unauthorized. Please login again."
        : err.response?.status === 403
        ? "Forbidden: insufficient role"
        : "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const fetchAllPlayers = async () => {
    if (!token) return;
    try {
      const res = await axios.get("/api/users?role=player", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllPlayers(res.data);
    } catch (err) {
      console.error(err);
      message.error("Failed to fetch players");
    }
  };

  const handlePromote = async (player) => {
    if (!player || !token) return;
    try {
      await axios.patch(`/api/clubadmins/${player._id}/promote`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      message.success(`${player.firstName} promoted!`);
      movePlayer(player._id, "approved");
    } catch (err) {
      console.error(err);
      message.error("Failed to promote player");
    } finally {
      setPromoteModalOpen(false);
      setSelectedPlayer(null);
      setAddModalOpen(false);
      setSelectedAddPlayer(null);
    }
  };

  const handleRejectConfirm = async () => {
    if (!playerToReject || !token) return;
    try {
      await axios.patch(`/api/clubadmins/${playerToReject._id}/reject`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      message.success("Request rejected");
      removePlayer(playerToReject._id);
    } catch (err) {
      console.error(err);
      message.error("Failed to reject request");
    } finally {
      setRejectModalOpen(false);
      setPlayerToReject(null);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!playerToDelete || !token) return;
    try {
      await axios.delete(`/api/clubadmins/${playerToDelete._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      message.success("User deleted");
      removePlayer(playerToDelete._id);
    } catch (err) {
      console.error(err);
      message.error("Failed to delete user");
    } finally {
      setDeleteModalOpen(false);
      setPlayerToDelete(null);
    }
  };

  const handleRevertConfirm = async () => {
    if (!playerToRevert || !token) return;
    try {
      await axios.patch(`/api/clubadmins/${playerToRevert._id}/revert`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      message.success(`${playerToRevert.firstName} reverted to player`);
      removePlayer(playerToRevert._id);
    } catch (err) {
      console.error(err);
      message.error("Failed to revert user");
    } finally {
      setRevertModalOpen(false);
      setPlayerToRevert(null);
    }
  };

  const movePlayer = (id, targetTab) => {
    let player;
    const newData = { ...clubAdmins };
    ["pending", "approved"].forEach(tab => {
      if (!player) {
        const idx = newData[tab].findIndex(p => p._id === id);
        if (idx !== -1) {
          player = newData[tab][idx];
          newData[tab].splice(idx, 1);
        }
      }
    });
    if (player) {
      newData[targetTab] = [player, ...newData[targetTab]];
      setClubAdmins(newData);
    }
  };

  const removePlayer = (id) => {
    setClubAdmins(prev => ({
      pending: prev.pending.filter(p => p._id !== id),
      approved: prev.approved.filter(p => p._id !== id),
    }));
  };

  const players = clubAdmins[activeTab];
  const filteredPlayers = players.filter(
    p => p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
         p.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
         p.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAllPlayers = allPlayers.filter(
    p => !p.roles.includes("clubadmin") &&
         (p.firstName.toLowerCase().includes(searchPlayerTerm.toLowerCase()) ||
          p.lastName.toLowerCase().includes(searchPlayerTerm.toLowerCase()) ||
          p.email.toLowerCase().includes(searchPlayerTerm.toLowerCase()))
  );

  return (
    <div className="app">
      <Sidebar />
      <section id="content" className="players-content">
        <Navbar />
        <main className="p-6 max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-extrabold mb-4">Club Admins</h1>

          <Button
            type="primary"
            style={{ marginBottom: 16 }}
            onClick={() => {
              fetchAllPlayers();
              setAddModalOpen(true);
            }}
          >
            Add Club Admin
          </Button>

          <Input
            placeholder="Search player..."
            value={searchPlayerTerm}
            onChange={e => setSearchPlayerTerm(e.target.value)}
            style={{ marginBottom: 12 }}
          />

          <div className="flex gap-4 mb-6">
            {["pending", "approved"].map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 rounded ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : (
            <div className="overflow-x-auto border rounded-lg">
              <table className="min-w-full bg-white">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Name</th>
                    <th className="py-4 px-6 text-left">Email</th>
                    <th className="py-4 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPlayers.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="text-center py-10 text-gray-500">
                        No players found.
                      </td>
                    </tr>
                  ) : filteredPlayers.map(player => (
                    <tr key={player._id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6">{player.firstName} {player.lastName}</td>
                      <td className="py-4 px-6">{player.email}</td>
                      <td className="py-4 px-6 flex gap-2">
                        {activeTab === "pending" && (
                          <>
                            <Button
                              type="primary"
                              icon={<FaUserPlus />}
                              onClick={() => { setSelectedPlayer(player); setPromoteModalOpen(true); }}
                            >
                              Promote
                            </Button>
                            <Button
                              danger
                              onClick={() => { setPlayerToReject(player); setRejectModalOpen(true); }}
                            >
                              Reject
                            </Button>
                          </>
                        )}
                        {activeTab === "approved" && (
                          <>
                            <Button
                              type="default"
                              onClick={() => { setPlayerToRevert(player); setRevertModalOpen(true); }}
                            >
                              Revert
                            </Button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Add Club Admin Modal */}
          <Modal
            title="Add Club Admin"
            open={addModalOpen}
            onCancel={() => setAddModalOpen(false)}
            onOk={() => handlePromote(selectedAddPlayer)}
            okText="Promote"
            cancelText="Cancel"
          >
            <Input
              placeholder="Search player..."
              value={searchPlayerTerm}
              onChange={e => setSearchPlayerTerm(e.target.value)}
              style={{ marginBottom: 12 }}
            />
            <div style={{ maxHeight: 300, overflowY: "auto" }}>
              {filteredAllPlayers.map(p => (
                <div
                  key={p._id}
                  onClick={() => setSelectedAddPlayer(p)}
                  style={{
                    padding: 6,
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    backgroundColor: selectedAddPlayer?._id === p._id ? "#e6f7ff" : "transparent",
                  }}
                >
                  {p.firstName} {p.lastName} - {p.email}
                </div>
              ))}
              {filteredAllPlayers.length === 0 && <p>No players found.</p>}
            </div>
          </Modal>

          {/* Promote Modal */}
          <Modal
            title={`Promote ${selectedPlayer?.firstName} to Club Admin?`}
            open={promoteModalOpen}
            onCancel={() => setPromoteModalOpen(false)}
            onOk={() => handlePromote(selectedPlayer)}
            okText="Promote"
            cancelText="Cancel"
          >
            <p>This will retain the player role and also assign them the Club Admin role.</p>
          </Modal>

          {/* Reject Modal */}
          <Modal
            title="Reject Club Admin Request"
            open={rejectModalOpen}
            onCancel={() => setRejectModalOpen(false)}
            onOk={handleRejectConfirm}
            okText="Reject"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
          >
            <p>Are you sure you want to reject this club admin request?</p>
          </Modal>

          {/* Delete Modal */}
          <Modal
            title="Confirm Deletion"
            open={deleteModalOpen}
            onCancel={() => setDeleteModalOpen(false)}
            onOk={handleDeleteConfirm}
            okText="Delete"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
          >
            <p>Are you sure you want to delete this user?</p>
          </Modal>

          {/* Revert Modal */}
          <Modal
            title="Revert Club Admin"
            open={revertModalOpen}
            onCancel={() => setRevertModalOpen(false)}
            onOk={handleRevertConfirm}
            okText="Revert"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
          >
            <p>Are you sure you want to revert this user back to a player?</p>
          </Modal>
        </main>
      </section>
    </div>
  );
};

export default SuperAdminClubAdmins;
