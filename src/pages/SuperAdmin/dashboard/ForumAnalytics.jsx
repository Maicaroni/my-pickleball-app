import React, { useEffect, useState } from 'react';
import axios from '../../../utils/axiosConfig';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Button, Modal, message, Input, Spin } from 'antd';
import { FaCheck, FaTimes, FaEye, FaTrash } from 'react-icons/fa';
import { useSuperAdminAuth } from '../../../contexts/SuperAdminAuthContext';

const SuperAdminPosts = () => {
  const { admin } = useSuperAdminAuth();
  const token = localStorage.getItem('superadminToken');

  const [activeTab, setActiveTab] = useState('pending'); 
  const [postsData, setPostsData] = useState({ pending: [], approved: [], rejected: [] });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedAttachment, setSelectedAttachment] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [loadingPostId, setLoadingPostId] = useState(null);

  const axiosConfig = { headers: { Authorization: `Bearer ${token}` } };

  const fetchPosts = async (status) => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await axios.get(`/posts?status=${status}`, axiosConfig);
      setPostsData(prev => ({ ...prev, [status]: res.data.posts || [] }));
    } catch (err) {
      console.error('Get posts error:', err.response || err);
      message.error('Failed to fetch posts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPosts(activeTab); }, [activeTab, token]);

  const shortId = (id) => (id ? id.slice(0, 3) + id.slice(-3) : '-');

  const movePost = (postId, targetTab) => {
    const sourceTabs = ['pending', 'approved', 'rejected'];
    let post;
    const newData = { ...postsData };
    sourceTabs.forEach(tab => {
      if (!post) {
        const idx = newData[tab].findIndex(p => p._id === postId);
        if (idx !== -1) { post = newData[tab][idx]; newData[tab].splice(idx, 1); }
      }
    });
    if (post) newData[targetTab] = [post, ...newData[targetTab]];
    setPostsData(newData);
  };

  const removePost = (postId) => {
    setPostsData(prev => ({
      pending: prev.pending.filter(p => p._id !== postId),
      approved: prev.approved.filter(p => p._id !== postId),
      rejected: prev.rejected.filter(p => p._id !== postId),
    }));
  };

  const handleApprove = async (postId) => {
    if (!token) return message.error("No token found");
    setLoadingPostId(postId);
    try {
      await axios.patch(`/posts/${postId}/approve`, {}, axiosConfig);
      message.success('Post approved ✅');
      movePost(postId, 'approved');
    } catch (err) {
      console.error('Approve error:', err.response || err);
      message.error(err.response?.data?.message || 'Approve failed ❌');
    } finally { setLoadingPostId(null); }
  };

  const handleReject = async (postId) => {
    if (!token) return message.error("No token found");
    setLoadingPostId(postId);
    try {
      await axios.patch(`/posts/${postId}/reject`, {}, axiosConfig);
      message.success('Post rejected ❌');
      movePost(postId, 'rejected');
    } catch (err) {
      console.error('Reject error:', err.response || err);
      message.error(err.response?.data?.message || 'Reject failed ❌');
    } finally { setLoadingPostId(null); }
  };

  const handleDeleteClick = (post) => { setPostToDelete(post); setDeleteModalOpen(true); };

  const handleDeleteConfirm = async () => {
    if (!postToDelete) return;
    setLoadingPostId(postToDelete._id);
    try {
      await axios.delete(`/posts/superadmin/${postToDelete._id}`, axiosConfig);
      message.success('Post deleted.');
      removePost(postToDelete._id);
    } catch (err) {
      console.error(err);
      message.error('Failed to delete post.');
    } finally {
      setLoadingPostId(null);
      setDeleteModalOpen(false);
      setPostToDelete(null);
    }
  };

  const posts = postsData[activeTab];
  const filteredPosts = posts.filter(post => {
    const contentMatch = post.content?.toLowerCase().includes(searchTerm.toLowerCase());
    const idMatch = post._id?.toLowerCase().includes(searchTerm.toLowerCase());
    const shortIdMatch = shortId(post._id).toLowerCase().includes(searchTerm.toLowerCase());
    return contentMatch || idMatch || shortIdMatch;
  });

  return (
    <div className="app">
      <Sidebar />
      <section id="content" className="players-content">
        <Navbar />
        <main className="p-6 max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-extrabold text-nuBlue mb-4">Posts</h1>

          <Input
            placeholder="Search posts..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ minWidth: 250, padding: '10px 16px', fontSize: 16, marginBottom: 16 }}
            allowClear
          />

          <div className="flex gap-4 mb-6">
            {['pending', 'approved', 'rejected'].map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-yellow-500 text-black' : 'bg-green-200'}`}
                onClick={() => setActiveTab(tab)}
                disabled={loading}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-10"><Spin size="large" /></div>
          ) : (
            <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
              <table className="min-w-full bg-white rounded-lg table-auto">
                <thead className="bg-nuBlue text-white">
                  <tr>
                    <th className="py-4 px-8 text-left">Post ID</th>
                    <th className="py-4 px-8 text-left">Author</th>
                    <th className="py-4 px-8 text-left">Content / Attachment</th>
                    <th className="py-4 px-8 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-10 text-gray-500">No posts found.</td>
                    </tr>
                  ) : filteredPosts.map(post => (
                    <tr key={post._id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-8 align-top text-base" title={post._id}>{shortId(post._id)}</td>
                      <td className="py-4 px-8 align-top">{post.author?.firstName} {post.author?.lastName}</td>
                      <td className="py-4 px-8 align-top">
                        <Button icon={<FaEye />} onClick={() => { setSelectedPost(post); setPostModalOpen(true); }}>
                          View
                        </Button>
                      </td>
                      <td className="py-4 px-8 align-top flex gap-2 flex-wrap">
                        {activeTab === 'pending' && (
                          <>
                            <Button type="primary" icon={<FaCheck />} className="bg-green-600 text-white"
                              onClick={() => handleApprove(post._id)}
                              disabled={loadingPostId === post._id}>
                              Approve
                            </Button>
                            <Button danger icon={<FaTimes />} onClick={() => handleReject(post._id)} disabled={loadingPostId === post._id}>
                              Reject
                            </Button>
                          </>
                        )}
                        {(activeTab === 'approved' || activeTab === 'rejected') && (
                          <Button danger icon={<FaTrash />} onClick={() => handleDeleteClick(post)} disabled={loadingPostId === post._id}>
                            Delete
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
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
          >
            <p className="text-lg">Are you sure you want to delete this post?</p>
          </Modal>

          {/* Post Modal */}
          <Modal
            title={`Post by ${selectedPost?.author?.firstName || '-'} ${selectedPost?.author?.lastName || ''}`}
            open={postModalOpen}
            onCancel={() => setPostModalOpen(false)}
            footer={null}
            width={700}
          >
            <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              <h3 className="font-semibold mb-2">Content:</h3>
              <p className="mb-4 whitespace-pre-wrap">{selectedPost?.content}</p>
              {selectedPost?.images?.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {selectedPost.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.url || img}
                      alt={`Attachment ${idx + 1}`}
                      style={{ maxWidth: '100%', maxHeight: 300, objectFit: 'contain', borderRadius: 6, cursor: 'pointer' }}
                      onClick={() => setSelectedAttachment(img.url || img)}
                    />
                  ))}
                </div>
              )}
            </div>
          </Modal>

          {/* Attachment Modal */}
          <Modal
            title="Attachment"
            open={!!selectedAttachment}
            onCancel={() => setSelectedAttachment(null)}
            footer={null}
            width={800}
          >
            {selectedAttachment?.endsWith?.('.pdf') ? (
              <embed src={selectedAttachment} width="100%" height="500px" type="application/pdf" />
            ) : (
              <img src={selectedAttachment} alt="Attachment" style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
            )}
          </Modal>

        </main>
      </section>
    </div>
  );
};

export default SuperAdminPosts;
