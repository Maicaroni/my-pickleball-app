import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthModal from '../components/AuthModal';

// Types for TypeScript (if using TS, move these to types/forum.ts)
/**
 * @typedef {Object} User
 * @property {string} id - Unique identifier
 * @property {string} username - User's display name
 * @property {string} avatarUrl - URL to user's avatar image (optional)
 * @property {string} initials - User's initials for avatar fallback
 */

/**
 * @typedef {Object} Image
 * @property {string} id - Unique identifier
 * @property {string} url - Image URL
 * @property {string} alt - Alt text for accessibility
 */

/**
 * @typedef {Object} Post
 * @property {string} id - Unique identifier
 * @property {User} author - Post author
 * @property {string} content - Post text content
 * @property {Image[]} images - Array of post images
 * @property {string} createdAt - ISO timestamp
 * @property {number} likeCount - Number of likes
 * @property {number} commentCount - Number of comments
 * @property {boolean} isLiked - Whether current user has liked
 */

const PageContainer = styled.div`
  padding: 70px 16px 24px;
  animation: fadeIn 0.3s ease;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 60px 0px 16px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ForumContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  padding-top: 0px;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    width: 100%;
    max-width: 100%;
  }
`;

const CreatePost = styled.div`
  width: 100%;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: 768px) {
    border-radius: 12px;
    margin-bottom: 16px;
    width: 96%;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  }
`;

const CreatePostHeader = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 20px;
  text-align: left;
  color: #64748b;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
  }

  &:hover {
    color: #29ba9b;
  }
`;

const CreatePostAvatar = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: #f1f5f9;
  border: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
  }
`;

const CreatePostOptions = styled.div`
  border-top: 1px solid #e2e8f0;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 12px 16px;
    gap: 12px;
    flex-wrap: wrap;
  }
`;

const ImageUploadButton = styled.button`
  background: #f8fafc;
  border: none;
  padding: 8px 16px;
  color: #64748b;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
    flex: 1;
    justify-content: center;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;

    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }

  &:hover {
    color: #29ba9b;
    background: #f1f5f9;
  }
`;

const Post = styled.article`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  margin-bottom: 24px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: 768px) {
    border-radius: 12px;
    margin-bottom: 16px;
    width: 96%;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  }
`;

const PostHeader = styled.div`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 14px 16px;
    gap: 12px;
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: #29ba9b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  font-weight: 600;
  border: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
    font-size: 13px;
  }
`;

const PostAuthor = styled.div`
  flex: 1;
  text-align: left;
  
  h3 {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    color: #1e293b;
    text-align: left;
  }
  
  span {
    font-size: 13px;
    color: #64748b;
    margin-top: 2px;
    display: block;
    text-align: left;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 14px;
    }
    span {
      font-size: 12px;
    }
  }
`;

const PostContent = styled.div`
  padding: 0 20px 20px;
  
  @media (max-width: 768px) {
    padding: 0 16px 18px;
  }
  
  p {
    margin: 0 0 16px;
    font-size: 15px;
    line-height: 1.6;
    color: #334155;

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 0 0 14px;
    }
  }
`;

const PostImages = styled.div`
  display: grid;
  gap: 4px;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 20px;
  
  @media (max-width: 768px) {
    margin: 0 16px;
    gap: 3px;
  }
  
  &.two-images {
    grid-template-columns: 1fr 1fr;
  }
  
  &.four-images {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    transition: transform 0.3s ease;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;

const PostActions = styled.div`
  padding: 16px 20px;
  display: flex;
  gap: 20px;
  border-top: 1px solid #e2e8f0;
  margin-top: 16px;

  @media (max-width: 768px) {
    padding: 14px 16px;
    gap: 14px;
  }

  button {
    background: none;
    border: none;
    padding: 8px 12px;
    color: #64748b;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 20px;
    transition: all 0.2s ease;

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 13px;
      gap: 8px;
      flex: 1;
      justify-content: center;
    }

    &:hover {
      color: #29ba9b;
      background: #f1f5f9;
    }
  }
`;

const LikeCount = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #262626;
  padding: 0 0 8px;
`;

const Caption = styled.div`
  padding: 0 16px 8px;
  font-size: 14px;
  line-height: 1.4;
  color: #262626;

  span {
    font-weight: 600;
    margin-right: 6px;
  }
`;

const TimeStamp = styled.div`
  padding: 0 16px 16px;
  font-size: 10px;
  color: #8e8e8e;
  text-transform: uppercase;
`;

const CommentSection = styled.div`
  border-top: 1px solid #efefef;
  padding: 16px;
  background: white;
`;

const Comment = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CommentContent = styled.div`
  flex: 1;
  font-size: 14px;
  line-height: 1.4;

  span {
    font-weight: 600;
    margin-right: 6px;
  }
`;

const CreatePostModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const CreatePostModalContent = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  padding: 32px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #262626;
  }

  p {
    color: #8e8e8e;
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 1.4;
  }
`;

const CreatePostModalHeader = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CreatePostTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #262626;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease;
  z-index: 1200;
  opacity: 0.8;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  svg {
    width: 40px;
    height: 40px;
    stroke: currentColor;
    stroke-width: 2;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
    
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

const CreatePostContent = styled.div`
  padding: 16px;
`;

const PostTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  resize: none;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 16px;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
  }
`;

const ImageUploadArea = styled.div`
  border: 2px dashed #dbdbdb;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #29ba9b;
    color: #29ba9b;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  
  &:hover {
    background: #234255;
  }
  
  &:disabled {
    background: #dbdbdb;
    cursor: not-allowed;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #64748b;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: spin 1s linear infinite;
    width: 24px;
    height: 24px;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #ef4444;
  background: #fef2f2;
  border-radius: 8px;
  margin: 1rem 0;
`;

const CarouselModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  opacity: 0;
  animation: fadeIn 0.2s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const CarouselContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    touch-action: none;
  }
`;

const CarouselTrack = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  width: 100%;
  height: 100%;
  transform: translateX(${props => props.$offset}px);
  transition: transform ${props => props.$isAnimating ? '0.3s' : '0s'} ease-out;
`;

const CarouselSlide = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;

const CarouselImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  user-select: none;
  -webkit-user-drag: none;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: none;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-50%) scale(1.05);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1);
  }

  ${props => props.$left ? 'left: 24px;' : 'right: 24px;'}

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1200;

  @media (max-width: 768px) {
    bottom: 16px;
    font-size: 12px;
    padding: 6px 12px;
  }
`;

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4v16m-8-8h16" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function LoadingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" opacity="0.2" />
      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 14.7505 3.14229 17.2432 4.98959 19" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Forum Component
 * 
 * Main forum page displaying posts and create post functionality.
 * Requires authentication for interactions.
 * 
 * API Endpoints needed:
 * - GET /api/posts - Fetch posts with pagination
 * - POST /api/posts - Create new post
 * - POST /api/posts/:id/like - Like/unlike post
 * - GET /api/posts/:id/comments - Fetch post comments
 * - POST /api/posts/:id/comments - Add comment
 */
function Forum() {
  // State management
  const [posts, setPosts] = useState([]); // Post[]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Pagination state
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [carouselOpen, setCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  // Add touch handling state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Fetch posts on mount and page change
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // TODO: Replace with actual API call when backend is ready
        // const response = await fetch('/api/posts');
        // const data = await response.json();
        // setPosts(data);
        
        // For now, use example posts
        setPosts(examplePosts);
        setHasMore(false);
      } catch (err) {
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  /**
   * Handles post interaction (like, comment)
   * Requires authentication
   * @param {Event} e - Event object
   * @param {string} action - Type of interaction ('like' | 'comment')
   * @param {string} postId - Post identifier
   */
  const handleInteraction = async (e, action, postId) => {
    e.preventDefault();
    
    // Check auth state
    const isAuthenticated = false; // TODO: Replace with actual auth check
    
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    try {
      switch (action) {
        case 'like':
          // TODO: Replace with actual API call
          // await api.post(`/posts/${postId}/like`);
          // Update posts state with new like count
          break;
        case 'comment':
          // TODO: Replace with actual API call
          // await api.post(`/posts/${postId}/comments`, { content });
          // Update posts state with new comment
          break;
      }
    } catch (err) {
      // Handle error
    }
  };

  /**
   * Creates a new post
   * Requires authentication
   * @param {Object} postData - Post data including text and images
   */
  const createPost = async (postData) => {
    try {
      // TODO: Replace with actual API call
      // const response = await api.post('/posts', postData);
      // setPosts(prev => [response.data, ...prev]);
    } catch (err) {
      // Handle error
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    
    // Check auth state
    const isAuthenticated = false; // TODO: Replace with actual auth check
    
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    setShowCreateModal(true);
  };

  const handleSubmitPost = async () => {
    try {
      setIsSubmitting(true);
      // TODO: Replace with actual API call
      // await createPost({ content: postContent, images: selectedImages });
      setShowCreateModal(false);
      setPostContent("");
      setSelectedImages([]);
    } catch (err) {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const openCarousel = (images, startIndex) => {
    setCurrentImages(images);
    setCurrentImageIndex(startIndex);
    setCarouselOpen(true);
    // Prevent body scroll when carousel is open
    document.body.style.overflow = 'hidden';
  };

  const closeCarousel = () => {
    setCarouselOpen(false);
    setCurrentImages([]);
    setCurrentImageIndex(0);
    // Restore body scroll
    document.body.style.overflow = 'auto';
  };

  const getContainerWidth = () => {
    return containerRef.current?.clientWidth || 0;
  };

  const calculateInitialOffset = () => {
    return -currentImageIndex * getContainerWidth();
  };

  useEffect(() => {
    if (carouselOpen) {
      setOffset(calculateInitialOffset());
    }
  }, [carouselOpen, currentImageIndex]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
    setIsAnimating(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
    const currentTouch = e.touches[0].clientX;
    const diff = currentTouch - touchStart;
    const baseOffset = calculateInitialOffset();
    
    // Add resistance at the ends
    if ((currentImageIndex === 0 && diff > 0) || 
        (currentImageIndex === currentImages.length - 1 && diff < 0)) {
      setOffset(baseOffset + (diff * 0.2));
    } else {
      setOffset(baseOffset + diff);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    setIsAnimating(true);

    if (isLeftSwipe && currentImageIndex < currentImages.length - 1) {
      nextImage();
    } else if (isRightSwipe && currentImageIndex > 0) {
      prevImage();
    } else {
      // Snap back to current image if swipe wasn't far enough
      setOffset(calculateInitialOffset());
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextImage = () => {
    setIsAnimating(true);
    setCurrentImageIndex((prev) => {
      const next = prev === currentImages.length - 1 ? prev : prev + 1;
      setOffset(-next * getContainerWidth());
      return next;
    });
  };

  const prevImage = () => {
    setIsAnimating(true);
    setCurrentImageIndex((prev) => {
      const next = prev === 0 ? prev : prev - 1;
      setOffset(-next * getContainerWidth());
      return next;
    });
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setOffset(calculateInitialOffset());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentImageIndex]);

  // Example post data structure for backend integration
  const examplePosts = [
    {
      id: '1',
      author: {
        id: '101',
        username: 'Sarah Lee',
        initials: 'SL',
        avatarColor: '#234255'
      },
      content: 'Great matches at the club today! Here are some highlights 📸',
      images: [
        { id: '1', url: 'https://placehold.co/400x400/234255/FFF?text=Match+1', alt: 'Match highlight 1' },
        { id: '2', url: 'https://placehold.co/400x400/234255/FFF?text=Match+2', alt: 'Match highlight 2' },
        { id: '3', url: 'https://placehold.co/400x400/234255/FFF?text=Match+3', alt: 'Match highlight 3' },
        { id: '4', url: 'https://placehold.co/400x400/234255/FFF?text=Match+4', alt: 'Match highlight 4' }
      ],
      createdAt: '2025-06-16T10:00:00Z',
      likeCount: 245,
      commentCount: 18,
      isLiked: false
    },
    {
      id: '2',
      author: {
        id: '102',
        username: 'Mike Chen',
        initials: 'MC',
        avatarColor: '#29ba9b'
      },
      content: "New paddles just arrived! Can't wait to try them out this weekend 🏓",
      images: [
        { id: '5', url: 'https://placehold.co/400x400/29ba9b/FFF?text=Paddle+1', alt: 'New paddle front' },
        { id: '6', url: 'https://placehold.co/400x400/29ba9b/FFF?text=Paddle+2', alt: 'New paddle back' }
      ],
      createdAt: '2025-06-16T08:00:00Z',
      likeCount: 132,
      commentCount: 24,
      isLiked: false
    }
  ];

  return (
    <PageContainer>
      <ForumContainer>
        <CreatePost>
          <CreatePostHeader onClick={handleCreatePost}>
            <CreatePostAvatar />
            What's happening in pickleball?
          </CreatePostHeader>
          <CreatePostOptions>
            <ImageUploadButton onClick={handleCreatePost}>
              <ImageIcon />
              Photo/Video
            </ImageUploadButton>
          </CreatePostOptions>
        </CreatePost>

        {loading && (
          <LoadingSpinner>
            <LoadingIcon />
          </LoadingSpinner>
        )}

        {error && (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        )}

        {!loading && !error && posts.map(post => (
          <Post key={post.id}>
            <PostHeader>
              <Avatar style={{ background: post.author.avatarColor }}>
                {post.author.initials}
              </Avatar>
              <PostAuthor>
                <h3>{post.author.username}</h3>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </PostAuthor>
            </PostHeader>
            <PostContent>
              <p>{post.content}</p>
              {post.images?.length > 0 && (
                <PostImages className={post.images.length === 2 ? 'two-images' : 'four-images'}>
                  {post.images.map((image, index) => (
                    <img
                      key={image.id}
                      src={image.url}
                      alt={image.alt}
                      onClick={() => openCarousel(post.images, index)}
                      style={{ cursor: 'pointer' }}
                    />
                  ))}
                </PostImages>
              )}
            </PostContent>
            <PostActions>
              <button onClick={(e) => handleInteraction(e, 'like', post.id)}>
                <HeartIcon />
                {post.likeCount}
              </button>
              <button onClick={(e) => handleInteraction(e, 'comment', post.id)}>
                <CommentIcon />
                {post.commentCount}
              </button>
            </PostActions>
          </Post>
        ))}

        {!loading && !error && posts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
            No posts yet. Be the first to share!
          </div>
        )}

        {showAuthModal && (
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            title="Join the Conversation!"
            message="Sign in or register to interact with the community"
          />
        )}

        {showCreateModal && (
          <CreatePostModal onClick={() => setShowCreateModal(false)}>
            <CreatePostModalContent onClick={e => e.stopPropagation()}>
              <CreatePostModalHeader>
                <CreatePostTitle>Create Post</CreatePostTitle>
                <CloseButton onClick={() => setShowCreateModal(false)}>
                  <CloseIcon />
                </CloseButton>
              </CreatePostModalHeader>
              <CreatePostContent>
                <PostTextArea
                  placeholder="What's happening in pickleball?"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
                <ImageUploadArea onClick={() => document.getElementById('imageInput').click()}>
                  <ImageIcon />
                  <p>Click to add photos/videos</p>
                  <input
                    id="imageInput"
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      // Handle file selection
                      const files = Array.from(e.target.files);
                      setSelectedImages(files);
                    }}
                  />
                </ImageUploadArea>
                {selectedImages.length > 0 && (
                  <PostImages className={selectedImages.length === 2 ? 'two-images' : 'four-images'}>
                    {selectedImages.map((file, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`Selected image ${index + 1}`}
                      />
                    ))}
                  </PostImages>
                )}
                <SubmitButton
                  disabled={!postContent.trim() && selectedImages.length === 0}
                  onClick={handleSubmitPost}
                >
                  {isSubmitting ? 'Posting...' : 'Post'}
                </SubmitButton>
              </CreatePostContent>
            </CreatePostModalContent>
          </CreatePostModal>
        )}

        {carouselOpen && (
          <CarouselModal onClick={closeCarousel}>
            <CarouselContent 
              ref={containerRef}
              onClick={e => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <CarouselTrack
                $offset={offset}
                $isAnimating={isAnimating}
              >
                {currentImages.map((image, index) => (
                  <CarouselSlide 
                    key={image.id}
                  >
                    <CarouselImage
                      src={image.url}
                      alt={image.alt}
                      draggable={false}
                    />
                  </CarouselSlide>
                ))}
              </CarouselTrack>
              <CarouselButton
                $left
                onClick={prevImage}
                disabled={currentImageIndex === 0}
              >
                <ChevronLeftIcon />
              </CarouselButton>
              <CarouselButton
                onClick={nextImage}
                disabled={currentImageIndex === currentImages.length - 1}
              >
                <ChevronRightIcon />
              </CarouselButton>
              <CloseButton onClick={closeCarousel}>
                <CloseIcon />
              </CloseButton>
              <ImageCounter>
                {currentImageIndex + 1} / {currentImages.length}
              </ImageCounter>
            </CarouselContent>
          </CarouselModal>
        )}
      </ForumContainer>
    </PageContainer>
  );
}

export default Forum; 