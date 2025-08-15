import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';
import { Button, Modal, message, Input } from 'antd';
import { FaCheck, FaTimes, FaEye, FaTrash } from 'react-icons/fa';

const SuperAdminPostsDebug = () => {
  const [activeTab, setActiveTab] = useState('pending'); // pending | approved | rejected
  const [postsData, setPostsData] = useState({ pending: [], approved: [], rejected: [] });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState(null);

  const token = localStorage.getItem('token');

  const fetchPosts = async (status) => {
    if (!token) return;

    try {
      setLoading(true);
      const res = await axios.get(`/api/posts?status=${status}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPostsData(prev => ({ ...prev, [status]: res.data.posts || [] }));
    } catch (error) {
      console.error('Get posts error:', error.response || error);
      message.error('Failed to fetch posts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(activeTab);
  }, [activeTab]);

  const handleApprove = async (postId) => {
    try {
      await axios.patch(`/api/posts/${postId}/approve`, {}, { headers: { Authorization: `Bearer ${token}` } });
      message.success('Post approved!');
      movePost(postId, 'approved');
    } catch (err) {
      console.error(err);
      message.error('Failed to approve post.');
    }
  };

  const handleReject = async (postId) => {
    try {
      await axios.patch(`/api/posts/${postId}/reject`, {}, { headers: { Authorization: `Bearer ${token}` } });
      message.warning('Post rejected.');
      movePost(postId, 'rejected');
    } catch (err) {
      console.error(err);
      message.error('Failed to reject post.');
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`/api/posts/superadmin/${postId}`, { headers: { Authorization: `Bearer ${token}` } });
      message.success('Post deleted.');
      removePost(postId);
    } catch (err) {
      console.error(err);
      message.error('Failed to delete post.');
    }
  };

  const movePost = (postId, targetTab) => {
    const sourceTabs = ['pending', 'approved', 'rejected'];
    let post;
    let newData = { ...postsData };

    sourceTabs.forEach(tab => {
      if (!post) {
        const idx = newData[tab].findIndex(p => p._id === postId);
        if (idx !== -1) {
          post = newData[tab][idx];
          newData[tab].splice(idx, 1);
        }
      }
    });

    if (post) {
      newData[targetTab] = [post, ...newData[targetTab]];
      setPostsData(newData);
    }
  };

  const removePost = (postId) => {
    setPostsData(prev => ({
      pending: prev.pending.filter(p => p._id !== postId),
      approved: prev.approved.filter(p => p._id !== postId),
      rejected: prev.rejected.filter(p => p._id !== postId),
    }));
  };

  const posts = postsData[activeTab];
  const filteredPosts = posts.filter(post =>
    post.content?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ minWidth: '250px', padding: '10px 16px', fontSize: '16px', marginBottom: '16px' }}
            allowClear
          />

          <div className="flex gap-4 mb-6">
            {['pending', 'approved', 'rejected'].map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-10 text-lg">Loading...</div>
          ) : (
            <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
              <table className="min-w-full bg-white rounded-lg table-auto">
                <thead className="bg-nuBlue text-white">
                  <tr>
                    <th className="py-4 px-8 text-left">Author</th>
                    <th className="py-4 px-8 text-left">Content</th>
                    <th className="py-4 px-8 text-left">Attachment</th>
                    <th className="py-4 px-8 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-10 text-gray-500">
                        No posts found. Check console for API response.
                      </td>
                    </tr>
                  ) : (
                    filteredPosts.map(post => (
                      <tr key={post._id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-8 align-top">{post.author?.firstName} {post.author?.lastName}</td>
                        <td className="py-4 px-8 align-top">{post.content}</td>

                        <td className="py-4 px-8 align-top">
                          <div className="flex gap-2 flex-wrap">
                            {post.images?.length > 0 ? (
                              post.images.slice(0, 4).map((img, idx) => (
                                <Button
                                  key={idx}
                                  icon={<FaEye />}
                                  onClick={() => {
                                    setSelectedAttachment(img.url || img);
                                    setAttachmentModal(true);
                                  }}
                                >
                                  {idx + 1}
                                </Button>
                              ))
                            ) : 'No file'}
                          </div>
                        </td>

                        <td className="py-4 px-8 align-top">
                          <div className="flex gap-2 flex-wrap">
                            {activeTab === 'pending' && <>
                              <Button type="primary" icon={<FaCheck />} className="bg-green-600 text-white" onClick={() => handleApprove(post._id)}>Approve</Button>
                              <Button danger icon={<FaTimes />} onClick={() => handleReject(post._id)}>Reject</Button>
                            </>}
                            {(activeTab === 'approved' || activeTab === 'rejected') && (
                              <Button danger icon={<FaTrash />} onClick={() => handleDelete(post._id)}>Delete</Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          <Modal
            title="Attachment"
            open={attachmentModal}
            onCancel={() => setAttachmentModal(false)}
            footer={null}
          >
            {selectedAttachment?.endsWith?.('.pdf') ? (
              <embed src={selectedAttachment} width="100%" height="500px" type="application/pdf" />
            ) : <img src={selectedAttachment} alt="Attachment" className="w-full" />}
          </Modal>
        </main>
      </section>
    </div>
  );
};

export default SuperAdminPostsDebug;
