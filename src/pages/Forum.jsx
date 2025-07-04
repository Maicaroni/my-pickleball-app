import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthModal from '../components/AuthModal';
import { useAuth } from '../contexts/AuthContext';

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
  outline: none;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
  }

  &:hover {
    color: #29ba9b;
  }

  &:focus {
    outline: none;
    border: none;
  }

  &:active {
    outline: none;
    border: none;
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
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 16px;
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
  outline: none;

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 13px;
    border-radius: 10px;
    min-height: 36px;
    font-weight: 500;
    background: #f1f5f9;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    color: #29ba9b;
    background: #f1f5f9;
  }

  &:focus {
    outline: none;
    border: none;
  }

  &:active {
    outline: none;
    border: none;
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
  
  /* Single image - preserves aspect ratio */
  &.single-image {
    img {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  
  /* Two images - side by side or stacked based on aspect ratio */
  &.two-images-horizontal {
    grid-template-columns: 1fr 1fr;
    img {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  &.two-images-vertical {
    grid-template-rows: 1fr 1fr;
    img {
      aspect-ratio: 16/9;
      object-fit: cover;
    }
  }
  
  /* Three images - one large + two small */
  &.three-images-left {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img:first-child {
      grid-row: 1 / 3;
      aspect-ratio: 4/5;
      object-fit: cover;
    }
    
    img:nth-child(2),
    img:nth-child(3) {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  &.three-images-top {
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr 1fr;
    
    img:first-child {
      grid-column: 1 / 3;
      aspect-ratio: 16/9;
      object-fit: cover;
    }
    
    img:nth-child(2),
    img:nth-child(3) {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  /* Four images - 2x2 grid */
  &.four-images {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  /* Five images - 2+3 layout */
  &.five-images {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img:first-child,
    img:nth-child(2) {
      grid-row: 1 / 3;
      aspect-ratio: 4/5;
      object-fit: cover;
    }
    
    img:nth-child(3),
    img:nth-child(4),
    img:nth-child(5) {
      aspect-ratio: 1;
      object-fit: cover;
    }
    
    img:nth-child(3) {
      grid-column: 3;
      grid-row: 1;
    }
    
    img:nth-child(4) {
      grid-column: 3;
      grid-row: 2;
    }
  }
  
  /* Six images - 3x2 grid */
  &.six-images {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  /* Seven images - 3x3 with first image spanning 2 rows */
  &.seven-images {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
    img:first-child {
      grid-row: 1 / 3;
      aspect-ratio: 4/5;
      object-fit: cover;
    }
    
    img:not(:first-child) {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  /* Eight images - 3x3 with first two images spanning 2 rows */
  &.eight-images {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
    img:first-child,
    img:nth-child(2) {
      grid-row: 1 / 3;
      aspect-ratio: 4/5;
      object-fit: cover;
    }
    
    img:not(:first-child):not(:nth-child(2)) {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  /* Nine+ images - 3x3 grid with overlay */
  &.nine-plus-images {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  img {
    width: 100%;
    transition: transform 0.3s ease;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.02);
      }
    }
  }
  
  /* More than 5 images indicator */
  .more-images-overlay {
    position: relative;
    
    &::after {
      content: '+' attr(data-remaining);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 600;
      backdrop-filter: blur(2px);
    }
  }
`;

const PostActions = styled.div`
  padding: 8px 20px;
  display: flex;
  gap: 20px;
  border-top: 1px solid #e2e8f0;
  margin-top: 16px;

  @media (max-width: 768px) {
    padding: 6px 16px;
    gap: 14px;
  }

  button {
    background: none;
    border: none;
    outline: none;
    padding: 8px 12px;
    color: #64748b;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 20px;
    transition: color 0.2s ease;

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 13px;
      gap: 8px;
      flex: 1;
      justify-content: center;
    }

    &:hover {
      color: #29ba9b;
    }

    &:focus {
      outline: none;
      background: none;
    }

    &:active {
      background: none;
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
  border-top: 1px solid #e2e8f0;
`;

const CommentInput = styled.div`
  padding: 8px 20px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    padding: 8px 16px;
    gap: 10px;
  }
`;

const CommentTextArea = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px 0;
  font-size: 14px;
  font-family: inherit;
  background: transparent;

  &::placeholder {
    color: #94a3b8;
  }
`;

const CommentSubmitButton = styled.button`
  background: none;
  color: #29ba9b;
  border: none;
  padding: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:disabled {
    color: #94a3b8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transform: scale(1.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const CommentsList = styled.div`
  background: white;
`;

const CommentItem = styled.div`
  padding: 6px 20px;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 6px 16px;
    gap: 10px;
  }

  &:last-child {
    padding-bottom: 12px;
  }
`;

const CommentAvatar = styled.div`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border-radius: 50%;
  background: #29ba9b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 2px;
`;

const CommentItemContent = styled.div`
  flex: 1;
  line-height: 1.3;
  
  .comment-content {
    font-size: 14px;
    color: #000;
    margin: 0 0 4px 0;
    text-align: left;
    
    .comment-author {
      font-weight: 600;
      margin-right: 6px;
    }
    
    .comment-text {
      font-weight: 400;
    }
  }
  
  .comment-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 4px;
    
    .comment-time {
      font-size: 12px;
      color: #8e8e8e;
      font-weight: 400;
    }
    
    .comment-reply {
      font-size: 12px;
      color: #8e8e8e;
      font-weight: 600;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      
      &:hover {
        color: #262626;
      }
    }
  }
`;

const ViewRepliesButton = styled.div`
  padding-left: 36px;
  margin-top: 4px;
  margin-bottom: 8px;
  text-align: left;
  width: 100%;
  
  .view-replies {
    margin-top: 8px;
    text-align: left;
    
    button {
      background: none !important;
      border: none;
      font-size: 12px;
      color: #8e8e8e;
      font-weight: 400;
      padding: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      outline: none;
      justify-content: flex-start;
      
      &:hover {
        color: #262626;
        background: none !important;
      }
      
      &:focus {
        outline: none;
        background: none !important;
      }
      
      &:active {
        background: none !important;
      }
      
      &::before {
        content: '';
        width: 20px;
        height: 1px;
        background: #8e8e8e;
        flex-shrink: 0;
      }
    }
  }
  
  @media (max-width: 768px) {
    padding-left: 28px;
    margin-bottom: 6px;
  }
`;

const ExpandCommentsButton = styled.button`
  width: 100%;
  padding: 12px;
  background: transparent;
  border: none;
  color: #64748b;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #29ba9b;
    background: #f1f5f9;
  }
`;

const ReplySection = styled.div`
  margin-left: 36px;
  border-left: 1px solid #e2e8f0;
  padding-left: 12px;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    margin-left: 28px;
    padding-left: 8px;
    margin-bottom: 10px;
  }
`;

const ReplyInput = styled.div`
  padding: 8px 0;
  display: flex;
  gap: 8px;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const ReplyTextArea = styled.input`
  flex: 1;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #29ba9b;
    box-shadow: 0 0 0 2px rgba(41, 186, 155, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const ReplySubmitButton = styled.button`
  background: none;
  color: #29ba9b;
  border: none;
  padding: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:disabled {
    color: #94a3b8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transform: scale(1.1);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const ReplyItem = styled.div`
  padding: 4px 0;
  display: flex;
  gap: 8px;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const ReplyAvatar = styled.div`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background: #29ba9b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: white;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 2px;
`;

const ReplyContent = styled.div`
  flex: 1;
  line-height: 1.3;
  
  .reply-content {
    font-size: 13px;
    color: #000;
    margin: 0 0 2px 0;
    text-align: left;
    
    .reply-author {
      font-weight: 600;
      margin-right: 6px;
    }
    
    .reply-text {
      font-weight: 400;
    }
  }
  
  .reply-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
    
    .reply-time {
      font-size: 11px;
      color: #8e8e8e;
      font-weight: 400;
    }
    
    .reply-reply {
      font-size: 11px;
      color: #8e8e8e;
      font-weight: 600;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      
      &:hover {
        color: #262626;
      }
    }
  }
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
  border: none;
  border-radius: 4px;
  resize: none;
  font-size: 15px;
  line-height: 1.6;
  color: #334155;
  font-family: inherit;
  margin-bottom: 0px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #94a3b8;
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
  width: ${props => props.width || '100%'};
  padding: ${props => props.padding || '12px'};
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: ${props => props.marginTop || '16px'};
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    border-radius: 10px;
    min-height: 40px;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(41, 186, 155, 0.2);
  }
  
  &:hover {
    background: #234255;
    transform: translateY(-1px);
    
    @media (max-width: 768px) {
      transform: none;
      background: #26a085;
    }
  }
  
  &:active {
    transform: translateY(0);
    
    @media (max-width: 768px) {
      transform: scale(0.98);
    }
  }
  
  &:disabled {
    background: #dbdbdb;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
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

const ImagePreviewContainer = styled.div`
  margin-top: 16px;
  padding: 16px 0;

  @media (max-width: 768px) {
    padding: 12px 0;
    margin-top: 12px;
  }
  
  /* Use the same smart layout as posts */
  .preview-grid {
    display: grid;
    gap: 8px;
    border-radius: 8px;
    overflow: hidden;
    
    /* Single image */
    &.single-image {
      .preview-image {
        max-height: 300px;
        border-radius: 8px;
      }
    }
    
    /* Two images */
    &.two-images-horizontal {
      grid-template-columns: 1fr 1fr;
      .preview-image {
        aspect-ratio: 1;
      }
    }
    
    /* Three images */
    &.three-images-left {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image:first-child {
        grid-row: 1 / 3;
        aspect-ratio: 4/5;
      }
      
      .preview-image:nth-child(2),
      .preview-image:nth-child(3) {
        aspect-ratio: 1;
      }
    }
    
    /* Four images */
    &.four-images {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image {
        aspect-ratio: 1;
      }
    }
    
    /* Five images */
    &.five-images {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image:first-child,
      .preview-image:nth-child(2) {
        grid-row: 1 / 3;
        aspect-ratio: 4/5;
      }
      
      .preview-image:nth-child(3) {
        grid-column: 3;
        grid-row: 1;
        aspect-ratio: 1;
      }
      
      .preview-image:nth-child(4) {
        grid-column: 3;
        grid-row: 2;
        aspect-ratio: 1;
      }
    }
    
    /* Six images */
    &.six-images {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image {
        aspect-ratio: 1;
      }
    }
    
    /* Seven images */
    &.seven-images {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      
      .preview-image:first-child {
        grid-row: 1 / 3;
        aspect-ratio: 4/5;
      }
      
      .preview-image:not(:first-child) {
        aspect-ratio: 1;
      }
    }
    
    /* Eight images */
    &.eight-images {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      
      .preview-image:first-child,
      .preview-image:nth-child(2) {
        grid-row: 1 / 3;
        aspect-ratio: 4/5;
      }
      
      .preview-image:not(:first-child):not(:nth-child(2)) {
        aspect-ratio: 1;
      }
    }
    
    /* Nine+ images */
    &.nine-plus-images {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      
      .preview-image {
        aspect-ratio: 1;
      }
    }
  }
`;

const ImagePreview = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #e2e8f0;

  &.preview-image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
  padding: 0;
  outline: none;

  &:hover {
    background: rgba(255, 255, 255, 1);
    color: #ef4444;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 14px;
    height: 14px;
    stroke-width: 2.5;
    flex-shrink: 0;
  }
`;

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4v16m-8-8h16" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon({ filled = false }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round"/>
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

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
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
  // Auth context
  const { user, isAuthenticated } = useAuth();
  
  // State management
  const [posts, setPosts] = useState([]); // Post[]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Comments state - TODO: Backend should provide this data
  const [showComments, setShowComments] = useState({}); // { postId: boolean }
  const [commentInputs, setCommentInputs] = useState({}); // { postId: string }
  const [postComments, setPostComments] = useState({}); // { postId: Comment[] }
  const [submittingComment, setSubmittingComment] = useState({}); // { postId: boolean }
  const [showReplies, setShowReplies] = useState({}); // { commentId: boolean }
  const [replyInputs, setReplyInputs] = useState({}); // { commentId: string }
  const [showReplyInput, setShowReplyInput] = useState({}); // { commentId: boolean }
  const [submittingReply, setSubmittingReply] = useState({}); // { commentId: boolean }
  
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
   * Handles post interaction (like, comment toggle)
   * Requires authentication
   * @param {Event} e - Event object
   * @param {string} action - Type of interaction ('like' | 'comment')
   * @param {string} postId - Post identifier
   */
  const handleInteraction = async (e, action, postId) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    try {
      switch (action) {
        case 'like':
          // TODO: Backend API call
          // const response = await fetch(`/api/posts/${postId}/like`, {
          //   method: 'POST',
          //   headers: {
          //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
          //     'Content-Type': 'application/json'
          //   }
          // });
          // const updatedPost = await response.json();
          
          // For now, update local state optimistically
          setPosts(prevPosts => 
            prevPosts.map(post => {
              if (post.id === postId) {
                return {
                  ...post,
                  isLiked: !post.isLiked,
                  likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1
                };
              }
              return post;
            })
          );
          break;
          
        case 'comment':
          // Toggle comment section visibility
          setShowComments(prev => ({
            ...prev,
            [postId]: !prev[postId]
          }));
          
          // Initialize comment input if not exists
          if (!commentInputs[postId]) {
            setCommentInputs(prev => ({
              ...prev,
              [postId]: ''
            }));
          }
          
          // Fetch comments if opening and not already loaded
          // TODO: Backend API call
          if (!showComments[postId] && !postComments[postId]) {
            // const commentsResponse = await fetch(`/api/posts/${postId}/comments`);
            // const comments = await commentsResponse.json();
            // setPostComments(prev => ({ ...prev, [postId]: comments }));
            
            // For now, initialize with empty array
            setPostComments(prev => ({ ...prev, [postId]: [] }));
          }
          break;
      }
    } catch (err) {
      console.error('Error handling interaction:', err);
    }
  };

  /**
   * Handles submitting a new comment
   * @param {string} postId - Post identifier
   */
  const handleSubmitComment = async (postId) => {
    const commentText = commentInputs[postId]?.trim();
    if (!commentText || !isAuthenticated) return;

    try {
      setSubmittingComment(prev => ({ ...prev, [postId]: true }));

      // TODO: Backend API call
      // const response = await fetch(`/api/posts/${postId}/comments`, {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ content: commentText })
      // });
      // const newComment = await response.json();

      // For now, create optimistic comment
      const newComment = {
        id: Date.now().toString(),
        author: {
          id: user.id,
          name: user.name,
          initials: user.name.split(' ').map(n => n[0]).join('').toUpperCase()
        },
        content: commentText,
        createdAt: new Date().toISOString()
      };

      // Update local state
      setPostComments(prev => ({
        ...prev,
        [postId]: [newComment, ...(prev[postId] || [])]
      }));

      // Update comment count in posts
      setPosts(prevPosts => 
        prevPosts.map(post => {
          if (post.id === postId) {
            return { ...post, commentCount: post.commentCount + 1 };
          }
          return post;
        })
      );

      // Clear input
      setCommentInputs(prev => ({ ...prev, [postId]: '' }));

    } catch (err) {
      console.error('Error submitting comment:', err);
    } finally {
      setSubmittingComment(prev => ({ ...prev, [postId]: false }));
    }
  };

  /**
   * Handles submitting a reply to a comment
   * @param {string} commentId - Comment identifier to reply to
   * @param {string} postId - Post identifier
   */
  const handleSubmitReply = async (commentId, postId) => {
    const replyText = replyInputs[commentId]?.trim();
    if (!replyText || !isAuthenticated) return;

    try {
      setSubmittingReply(prev => ({ ...prev, [commentId]: true }));

      // TODO: Backend API call
      // const response = await fetch(`/api/comments/${commentId}/replies`, {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ content: replyText })
      // });
      // const newReply = await response.json();

      // For now, create optimistic reply
      const newReply = {
        id: Date.now().toString(),
        author: {
          id: user.id,
          name: user.name,
          initials: user.name.split(' ').map(n => n[0]).join('').toUpperCase()
        },
        content: replyText,
        createdAt: new Date().toISOString(),
        parentId: commentId
      };

      // Update local state - add reply to the specific comment
      setPostComments(prev => ({
        ...prev,
        [postId]: prev[postId].map(comment => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), newReply]
            };
          }
          return comment;
        })
      }));

      // Clear reply input and hide input field
      setReplyInputs(prev => ({ ...prev, [commentId]: '' }));
      setShowReplyInput(prev => ({ ...prev, [commentId]: false }));

      // Show replies section if it was hidden
      setShowReplies(prev => ({ ...prev, [commentId]: true }));

    } catch (err) {
      console.error('Error submitting reply:', err);
    } finally {
      setSubmittingReply(prev => ({ ...prev, [commentId]: false }));
    }
  };

  /**
   * Handles showing reply input for a comment
   * @param {string} commentId - Comment identifier
   */
  const handleReplyClick = (commentId) => {
    setShowReplyInput(prev => ({ ...prev, [commentId]: !prev[commentId] }));
    
    // Initialize reply input if not exists
    if (!replyInputs[commentId]) {
      setReplyInputs(prev => ({ ...prev, [commentId]: '' }));
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
    
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    setShowCreateModal(!showCreateModal);
  };

  const handlePhotoVideoClick = (e) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    // Directly open file picker
    document.getElementById('imageInput').click();
  };

  const handleSubmitPost = async () => {
    try {
      setIsSubmitting(true);
      // TODO: Replace with actual API call
      // await createPost({ content: postContent, images: selectedImages });
      
      // Close the expanded create post interface
      setShowCreateModal(false);
      setPostContent("");
      setSelectedImages([]);
      
      // Optional: Show success message or refresh posts
      // fetchPosts();
    } catch (err) {
      // Handle error
      console.error('Error creating post:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeImage = (indexToRemove) => {
    setSelectedImages(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  // Function to determine the best layout based on image count and aspect ratios
  const getImageLayoutClass = (images) => {
    const count = images.length;
    
    if (count === 1) {
      return 'single-image';
    }
    
    if (count === 2) {
      return 'two-images-horizontal';
    }
    
    if (count === 3) {
      return 'three-images-left';
    }
    
    if (count === 4) {
      return 'four-images';
    }
    
    if (count === 5) {
      return 'five-images';
    }
    
    if (count === 6) {
      return 'six-images';
    }
    
    if (count === 7) {
      return 'seven-images';
    }
    
    if (count === 8) {
      return 'eight-images';
    }
    
    if (count >= 9) {
      return 'nine-plus-images';
    }
    
    return 'four-images';
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
          
                      {showCreateModal && (
            <div style={{ padding: '0 20px 16px' }}>
              <PostTextArea
                placeholder="Write something here..."
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                style={{ width: '100%', minHeight: '80px' }}
              />
              {selectedImages.length > 0 && (
                <ImagePreviewContainer>
                  <div className={`preview-grid ${getImageLayoutClass(selectedImages)}`}>
                    {selectedImages.slice(0, selectedImages.length >= 9 ? 8 : selectedImages.length).map((image, index) => (
                      <ImagePreview key={index} className="preview-image">
                        <img src={image.url} alt={`Selected ${index + 1}`} />
                        <RemoveImageButton onClick={() => removeImage(index)}>
                          <CloseIcon />
                        </RemoveImageButton>
                      </ImagePreview>
                    ))}
                  </div>
                  {selectedImages.length > 8 && (
                    <div style={{ 
                      marginTop: '8px', 
                      fontSize: '13px', 
                      color: '#64748b',
                      textAlign: 'center'
                    }}>
                      +{selectedImages.length - 8} more images
                    </div>
                  )}
                </ImagePreviewContainer>
              )}
            </div>
          )}
          
          <CreatePostOptions>
            <ImageUploadButton onClick={handlePhotoVideoClick}>
              <ImageIcon />
              Photo/Video
            </ImageUploadButton>
            {showCreateModal && (
              <SubmitButton
                disabled={!postContent.trim()}
                onClick={handleSubmitPost}
                width="auto"
                padding="8px 12px"
                marginTop="0"
              >
                {isSubmitting ? 'Posting...' : 'Post'}
              </SubmitButton>
            )}
            <input
              id="imageInput"
              type="file"
              multiple
              accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,video/mp4,video/mov,video/avi,video/wmv,video/webm"
              capture="environment"
              style={{ display: 'none' }}
              onChange={(e) => {
                // Handle file selection from device storage
                const files = Array.from(e.target.files);
                if (files.length > 0) {
                  // Create preview URLs for the selected images
                  const imagePreviewsPromises = files.map(file => {
                    return new Promise((resolve) => {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        resolve({
                          file: file,
                          url: e.target.result,
                          name: file.name
                        });
                      };
                      reader.readAsDataURL(file);
                    });
                  });

                  Promise.all(imagePreviewsPromises).then(imagePreviews => {
                    setSelectedImages(imagePreviews);
                    setShowCreateModal(true); // Auto-open the create modal when images are selected
                  });

                  // Clear the input so the same file can be selected again if needed
                  e.target.value = '';
                }
              }}
            />
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
                <PostImages className={getImageLayoutClass(post.images)}>
                  {post.images.slice(0, post.images.length >= 9 ? 8 : post.images.length).map((image, index) => (
                    <img
                      key={image.id}
                      src={image.url}
                      alt={image.alt}
                      onClick={() => openCarousel(post.images, index)}
                      style={{ cursor: 'pointer' }}
                      className={index === 7 && post.images.length > 8 ? 'more-images-overlay' : ''}
                      data-remaining={post.images.length > 8 ? post.images.length - 8 : ''}
                    />
                  ))}
                </PostImages>
              )}
            </PostContent>
            <PostActions>
              <button 
                onClick={(e) => handleInteraction(e, 'like', post.id)}
                style={{ 
                  color: post.isLiked ? '#ef4444' : '#64748b',
                  fontWeight: post.isLiked ? '600' : '400'
                }}
              >
                <HeartIcon filled={post.isLiked} />
                {post.likeCount}
              </button>
              <button onClick={(e) => handleInteraction(e, 'comment', post.id)}>
                <CommentIcon />
                {post.commentCount}
              </button>
            </PostActions>
            
            {/* Comments Section - Only show if logged in and comments are toggled */}
            {isAuthenticated && showComments[post.id] && (
              <CommentSection>
                <CommentInput>
                  <CommentAvatar>
                    {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </CommentAvatar>
                  <CommentTextArea
                    placeholder="Add a comment..."
                    value={commentInputs[post.id] || ''}
                    onChange={(e) => setCommentInputs(prev => ({
                      ...prev,
                      [post.id]: e.target.value
                    }))}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSubmitComment(post.id);
                      }
                    }}
                  />
                  <CommentSubmitButton
                    onClick={() => handleSubmitComment(post.id)}
                    disabled={!commentInputs[post.id]?.trim() || submittingComment[post.id]}
                  >
                    <SendIcon />
                  </CommentSubmitButton>
                </CommentInput>
                
                {/* Comments List */}
                {postComments[post.id] && postComments[post.id].length > 0 && (
                  <CommentsList>
                    {postComments[post.id].map((comment, index) => (
                      <div key={comment.id}>
                        <CommentItem>
                          <CommentAvatar>
                            {comment.author.initials}
                          </CommentAvatar>
                          <CommentItemContent>
                            <p className="comment-content">
                              <span className="comment-author">{comment.author.name}</span>
                              <span className="comment-text">{comment.content}</span>
                            </p>
                            <div className="comment-meta">
                              <span className="comment-time">
                                {(() => {
                                  const now = new Date();
                                  const commentDate = new Date(comment.createdAt);
                                  const diffInMinutes = Math.floor((now - commentDate) / (1000 * 60));
                                  const diffInHours = Math.floor(diffInMinutes / 60);
                                  const diffInDays = Math.floor(diffInHours / 24);
                                  
                                  if (diffInMinutes < 60) return `${diffInMinutes || 1}m`;
                                  if (diffInHours < 24) return `${diffInHours}h`;
                                  return `${diffInDays}d`;
                                })()}
                              </span>
                              <button 
                                className="comment-reply"
                                onClick={() => handleReplyClick(comment.id)}
                              >
                                Reply
                              </button>
                            </div>
                          </CommentItemContent>
                        </CommentItem>

                        {/* Toggle View/Hide replies button - below main comment */}
                        {comment.replies && comment.replies.length > 0 && (
                          <ViewRepliesButton>
                            <div className="view-replies">
                              <button onClick={() => setShowReplies(prev => ({
                                ...prev,
                                [comment.id]: !prev[comment.id]
                              }))}>
                                {showReplies[comment.id] 
                                  ? 'Hide replies' 
                                  : `View replies (${comment.replies.length})`
                                }
                              </button>
                            </div>
                          </ViewRepliesButton>
                        )}
                        
                        {/* Replies Section */}
                        {showReplies[comment.id] && comment.replies && comment.replies.length > 0 && (
                          <ReplySection>
                            {comment.replies.map(reply => (
                              <ReplyItem key={reply.id}>
                                <ReplyAvatar>
                                  {reply.author.initials}
                                </ReplyAvatar>
                                <ReplyContent>
                                  <p className="reply-content">
                                    <span className="reply-author">{reply.author.name}</span>
                                    <span className="reply-text">{reply.content}</span>
                                  </p>
                                  <div className="reply-meta">
                                    <span className="reply-time">
                                      {(() => {
                                        const now = new Date();
                                        const replyDate = new Date(reply.createdAt);
                                        const diffInMinutes = Math.floor((now - replyDate) / (1000 * 60));
                                        const diffInHours = Math.floor(diffInMinutes / 60);
                                        const diffInDays = Math.floor(diffInHours / 24);
                                        
                                        if (diffInMinutes < 60) return `${diffInMinutes || 1}m`;
                                        if (diffInHours < 24) return `${diffInHours}h`;
                                        return `${diffInDays}d`;
                                      })()}
                                    </span>
                                    <button 
                                      className="reply-reply"
                                      onClick={() => handleReplyClick(comment.id)}
                                    >
                                      Reply
                                    </button>
                                  </div>
                                </ReplyContent>
                              </ReplyItem>
                            ))}
                          </ReplySection>
                        )}

                        {/* Reply Input Section - at the end */}
                        {showReplyInput[comment.id] && (
                          <ReplySection>
                            <ReplyInput>
                              <ReplyAvatar>
                                {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                              </ReplyAvatar>
                              <ReplyTextArea
                                placeholder="Reply..."
                                value={replyInputs[comment.id] || ''}
                                onChange={(e) => setReplyInputs(prev => ({
                                  ...prev,
                                  [comment.id]: e.target.value
                                }))}
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleSubmitReply(comment.id, post.id);
                                  }
                                }}
                              />
                              <ReplySubmitButton
                                onClick={() => handleSubmitReply(comment.id, post.id)}
                                disabled={!replyInputs[comment.id]?.trim() || submittingReply[comment.id]}
                              >
                                <SendIcon />
                              </ReplySubmitButton>
                            </ReplyInput>
                          </ReplySection>
                        )}
                      </div>
                    ))}
                  </CommentsList>
                )}
              </CommentSection>
            )}
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