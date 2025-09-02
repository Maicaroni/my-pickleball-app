import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEllipsisH } from 'react-icons/fa';
import AuthModal from '../components/AuthModal';
import { useAuth } from '../contexts/AuthContext';
import { FiTrash2 } from "react-icons/fi"; // trash icon
import { FiFlag } from "react-icons/fi"; 
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios';


export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
`;

export const CancelButton = styled.button`
  background: #f1f5f9;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  color: #64748b;

  &:hover {
    background: #e2e8f0;
  }
`;

export const DangerButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;
export const MenuContainer = styled.div`
  position: relative;
`;

export const MenuToggle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const MenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
  z-index: 10;
  min-width: 120px;
`;

export const MenuItem = styled.button`
  background: transparent;
  border: none;
  padding: 8px 12px;
  text-align: left;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

const PageContainer = styled.div`
  padding: 80px 16px 24px;
  animation: fadeIn 0.3s ease;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 70px 0px 16px;
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
  padding: 32px;
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
    padding: 24px;
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
  overflow: hidden;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
  }
`;

const CreatePostOptions = styled.div`
  border-top: 1px solid #e2e8f0;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 16px 24px;
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
  padding: 16px 32px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 14px 24px;
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
  padding: 0 32px 12px;
  text-align: left;
  
  @media (max-width: 768px) {
    padding: 0 24px 12px;
  }
  
  p {
    margin: 0 0 8px;
    font-size: 15px;
    line-height: 1.6;
    color: #334155;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 0 0 8px;
    }
  }
`;

const SeeMoreButton = styled.button`
  background: none;
  border: none;
  color: #64748b;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  margin: 0 0 8px 0;
  font-weight: 500;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0 0 8px 0;
  }

  &:hover {
    color: #29ba9b;
  }

  &:focus {
    outline: none;
  }
`;

const PostImages = styled.div`
  display: grid;
  gap: 4px;
  border-radius: 8px;
  overflow: hidden;
  margin: 8px 1px 0;
  
  @media (max-width: 768px) {
    margin: 8px 0 0;
    gap: 3px;
  }
  
  /* Single image - square aspect ratio */
  &.single-image {
    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  
  /* Two images - side by side squares */
  &.two-images-horizontal {
    grid-template-columns: 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  
  /* Three images - portrait left + two stacked squares right */
  &.three-images-left {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img:first-child {
      grid-row: 1 / 3;
      aspect-ratio: 0.5;
      object-fit: cover;
      border-radius: 8px;
    }
    
    img:nth-child(2),
    img:nth-child(3) {
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  
  /* Four images - 2x2 grid of squares */
  &.four-images {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  
  /* Four+ images with overlay - 2x2 grid with "+X" overlay on last image */
  &.four-images-with-overlay {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    img {
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 8px;
    }
    
    .image-container {
      position: relative;
      aspect-ratio: 1;
      border-radius: 8px;
      overflow: hidden;
  
  img {
    width: 100%;
        height: 100%;
        border-radius: 0;
      }
      
      &.overlay {
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
          font-size: 28px;
          font-weight: 700;
      backdrop-filter: blur(2px);
          border-radius: 8px;
          
          @media (max-width: 768px) {
            font-size: 24px;
          }
        }
      }
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
`;

const PostActions = styled.div`
  padding: 8px 32px;
  display: flex;
  gap: 20px;
  border-top: 1px solid #e2e8f0;
  margin-top: 8px;

  @media (max-width: 768px) {
    padding: 6px 24px;
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
  padding: 8px 32px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    padding: 8px 24px;
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
  padding: 6px 32px;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 6px 24px;
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
    .comment-delete {
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
      .reply-delete{
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

const CreatePostInputContainer = styled.div`
  padding: 0 32px 16px;
  
  @media (max-width: 768px) {
    padding: 0 24px 16px;
  }
`;

const PostTextArea = styled.textarea`
  width: 100%;
  min-height: 48px; /* 2 lines: (15px * 1.6 * 2) = 48px */
  height: auto;
  padding: 8px 0px;
  border: none;
  border-radius: 4px;
  resize: none;
  font-size: 15px;
  line-height: 1.6;
  color: #334155;
  font-family: inherit;
  margin-bottom: 0px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 14px;
    min-height: 45px; /* 2 lines: (14px * 1.6 * 2) = 44.8px */
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

const SubmitButton = styled(({ marginTop, ...rest }) => <button {...rest} />)`
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

const NotificationPopup = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  z-index: 1050;
  max-width: 380px;
  width: 90%;
  animation: slideDown 0.3s ease;
  backdrop-filter: blur(8px);

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media (max-width: 768px) {
    top: 70px;
    padding: 14px 18px;
    border-radius: 10px;
    max-width: 340px;
  }
`;

const NotificationContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const NotificationIcon = styled.div`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background: #fbbf24;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 12px;
    height: 12px;
    color: white;
    stroke-width: 3;
  }
`;

const NotificationText = styled.div`
  flex: 1;
  
  h4 {
    margin: 0 0 4px 0;
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    line-height: 1.3;
  }
  
  p {
    margin: 0;
    font-size: 13px;
    color: #64748b;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 13px;
    }
    
    p {
      font-size: 12px;
    }
  }
`;

const NotificationClose = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #94a3b8;
  transition: all 0.2s ease;
  border-radius: 4px;
  margin-top: -2px;

  &:hover {
    color: #64748b;
    background: #f1f5f9;
  }

  svg {
    width: 16px;
    height: 16px;
    stroke-width: 2;
  }
`;

const ReportButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.2s ease;
  z-index: 100;

  @media (max-width: 768px) {
    top: 14px;
    right: 14px;
    padding: 6px;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #64748b;
    fill: currentColor;

    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    
    svg {
      color: #ef4444;
    }

    .report-tooltip {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:focus {
    outline: none;
    opacity: 1;
    background: rgba(239, 68, 68, 0.1);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
  }

  &:active {
    outline: none;
    transform: scale(0.95);
    background: rgba(239, 68, 68, 0.2);
  }
`;

const ReportTooltip = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #1f2937;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  margin-top: 4px;
  opacity: 0;
  transform: translateY(-4px);
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 20;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 8px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #1f2937;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 4px 8px;
  }
`;

const PostContainer = styled.div`
  position: relative;

  &:hover ${ReportButton} {
    opacity: 1;
  }
`;

const ReportModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ReportModalContent = styled.div`
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
  overflow: hidden;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    border-radius: 16px;
    max-width: 95%;
    margin: 10px;
  }
`;

const ReportModalHeader = styled.div`
  padding: 32px 32px 16px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #f1f5f9;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 24px 24px 16px;
  }

  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    letter-spacing: -0.025em;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  button {
    position: absolute;
    top: 24px;
    right: 24px;
    background: white;
    border: 1px solid #e2e8f0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #64748b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #f8fafc;
      color: #ef4444;
      transform: scale(1.05);
      border-color: #ef4444;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);
    }

    &:focus {
      outline: none;
      background: #f8fafc;
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
    }

    &:active {
      outline: none;
      transform: scale(0.95);
      background: #fef2f2;
      border-color: #dc2626;
    }

    div {
      color: inherit;
    }
  }
`;

const ReportModalBody = styled.div`
  padding: 24px 32px;
  flex: 1;
  overflow-y: auto;
  min-height: 0;

  /* Custom scrollbar styling - matches notification component */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 3px;
    transition: background 0.2s ease;
  }
  
  /* Remove arrow buttons */
  &::-webkit-scrollbar-button {
    display: none;
  }
  
  /* Show scrollbar on hover */
  &:hover {
    scrollbar-color: #cbd5e1 #f1f5f9;
    
    &::-webkit-scrollbar-track {
      background: #f1f5f9;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      
      &:hover {
        background: #94a3b8;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 20px 24px;
  }

  > p {
    margin: 0 0 24px 0;
    font-size: 16px;
    color: #64748b;
    line-height: 1.6;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 15px;
      margin-bottom: 20px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const ReportOption = styled.button`
  width: 100%;
  padding: 18px 20px;
  background: ${props => props.$selected ? '#f0fdf4' : 'white'};
  border: 2px solid ${props => props.$selected ? '#22c55e' : '#e2e8f0'};
  border-radius: 12px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.$selected ? '#15803d' : '#374151'};
  position: relative;

  @media (max-width: 768px) {
    padding: 16px 18px;
    font-size: 14px;
  }

  &:hover {
    border-color: #22c55e;
    background: #f0fdf4;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
  }

  &:focus {
    outline: none;
    border-color: #22c55e;
    background: #f0fdf4;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
  }

  &:active {
    outline: none;
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(34, 197, 94, 0.2);
  }

  ${props => props.$selected && `
    &::after {
      content: '✓';
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
      color: #22c55e;
      font-weight: 700;
      font-size: 16px;
    }
  `}
`;

const ReportModalFooter = styled.div`
  padding: 24px 32px 32px;
  display: flex;
  gap: 16px;
  border-top: 1px solid #f1f5f9;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 20px 24px 24px;
    gap: 12px;
  }
`;

const ReportCancelButton = styled.button`
  flex: 1;
  padding: 14px 24px;
  background: white;
  color: #64748b;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
    color: #475569;
  }

  &:focus {
    outline: none;
    border-color: #cbd5e1;
    box-shadow: 0 0 0 3px rgba(203, 213, 225, 0.1);
  }

  &:active {
    outline: none;
    transform: translateY(0);
    background: #f1f5f9;
  }
`;

const ReportSubmitButton = styled.button`
  flex: 1;
  padding: 14px 24px;
  background: ${props => props.disabled ? '#94a3b8' : '#ef4444'};
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }

  &:hover:not(:disabled) {
    background: #dc2626;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
  }

  &:active:not(:disabled) {
    outline: none;
    transform: translateY(0);
    background: #b91c1c;
    box-shadow: 0 2px 6px rgba(239, 68, 68, 0.4);
  }
`;

const CustomReasonInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 15px;
  font-family: inherit;
  resize: vertical;
  margin-top: 16px;
  transition: all 0.2s ease;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: #22c55e;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: 768px) {
    min-height: 80px;
    padding: 14px;
    font-size: 14px;
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
  max-width: 95%;
  max-height: 85vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 75vh;
  }
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
  padding: 0;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 16px;
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
        aspect-ratio: 1;
        border-radius: 8px;
      }
    }
    
    /* Two images */
    &.two-images-horizontal {
      grid-template-columns: 1fr 1fr;
      .preview-image {
        aspect-ratio: 1;
        border-radius: 8px;
      }
    }
    
    /* Three images */
    &.three-images-left {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image:first-child {
        grid-row: 1 / 3;
        aspect-ratio: 0.5;
        border-radius: 8px;
      }
      
      .preview-image:nth-child(2),
      .preview-image:nth-child(3) {
        aspect-ratio: 1;
        border-radius: 8px;
      }
    }
    
    /* Four images */
    &.four-images {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image {
        aspect-ratio: 1;
        border-radius: 8px;
      }
    }
    
    /* Four+ images with overlay */
    &.four-images-with-overlay {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
      .preview-image {
        aspect-ratio: 1;
        border-radius: 8px;
        
        &.overlay-preview {
          .overlay-indicator {
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
            font-weight: 700;
            backdrop-filter: blur(2px);
            border-radius: 8px;
            
            @media (max-width: 768px) {
              font-size: 20px;
            }
          }
        }
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
    <div style={{
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'inherit',
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      position: 'relative',
      top: '-2px', // Fine-tune vertical centering
      left: '0.5px' // Fine-tune horizontal centering
    }}>
      ×
    </div>
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

function WarningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
    </svg>
  );
}

function DefaultProfileIcon() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ width: '100%', height: '100%' }}>
      <circle cx="50" cy="50" r="50" fill="#E5E7EB"/>
      <circle cx="50" cy="35" r="15" fill="#9CA3AF"/>
      <path d="M50 60c-20 0-35 10-35 25v15h70V85c0-15-15-25-35-25z" fill="#9CA3AF"/>
    </svg>
  );
}

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
  const [deleteCommentTarget, setDeleteCommentTarget] = useState(null); // { postId, commentId } or null
  const [showDeleteCommentModal, setShowDeleteCommentModal] = useState(false);
  const [deleteReplyTarget, setDeleteReplyTarget] = useState(null); // { postId, commentId, replyId } or null
  const [showDeleteReplyModal, setShowDeleteReplyModal] = useState(false);
  
  // Notification state
  const [notification, setNotification] = useState({
    show: false,
    title: '',
    message: ''
  });
  
  // Expanded posts state for "see more" functionality
  const [expandedPosts, setExpandedPosts] = useState({});
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
  // Elipsis State
  const [openMenu, setOpenMenu] = useState({});
  //Delete Modal State
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  // Report modal state
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportingPostId, setReportingPostId] = useState(null);
  const [selectedReportReason, setSelectedReportReason] = useState('');
  const [customReportReason, setCustomReportReason] = useState('');
  // Add touch handling state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;
  // Show notification function
  const showNotification = (title, message) => {
    setNotification({
      show: true,
      title,
      message
    });
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  // Hide notification function
  const hideNotification = () => {
    setNotification(prev => ({ ...prev, show: false }));
  };

  // Toggle post expansion
  const togglePostExpansion = (postId) => {
    setExpandedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  // Truncate text function
  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  // Auto-resize textarea
  const handleTextareaResize = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.max(48, textarea.scrollHeight) + 'px'; // Min 48px for 2 lines with new line-height
  };

  // Fetch posts on mount and page change
// Fetch posts on mount and page change
useEffect(() => {
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const config = user?.token
        ? { headers: { Authorization: `Bearer ${user.token}` } }
        : {};

      const response = await axios.get(
        `http://localhost:5000/api/posts?status=approved&page=${page}&limit=10`,
        config
      );

      const { posts: newPosts, totalCount } = response.data;
      setPosts(page === 1 ? newPosts : prev => [...prev, ...newPosts]);
      setHasMore(page * 10 < totalCount);

      // Fetch comments only if logged in
      if (user) {
        const commentPromises = newPosts.map(post =>
          axios.get(`http://localhost:5000/api/posts/${post._id}/comments`, {
            headers: { Authorization: `Bearer ${user.token}` },
          })
        );

        const commentResults = await Promise.allSettled(commentPromises);

        const commentsMap = {};
        const repliesMap = {};

        commentResults.forEach((result, i) => {
          const postId = newPosts[i]._id;
          if (result.status === "fulfilled") {
            const comments = result.value.data.comments || [];
            commentsMap[postId] = comments;

            comments.forEach(comment => {
              if (comment.replies?.length > 0) {
                repliesMap[comment._id] = true;
              }
            });
          } else {
            console.error(
              `Failed to fetch comments for post ${postId}:`,
              result.reason
            );
          }
        });

        setPostComments(prev => ({ ...prev, ...commentsMap }));
        setShowReplies(prev => ({ ...prev, ...repliesMap }));
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Failed to load posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  fetchPosts();
}, [page, user]);

const handleInteraction = async (e, action, postId) => {
  e.preventDefault();

  // Redirect guests to login modal
  if (!isAuthenticated) {
    setShowAuthModal(true);
    return;
  }

  try {
    switch (action) {
      case 'like':
        // Optimistic UI update
        setPosts(prevPosts =>
          prevPosts.map(post => {
            if (post._id === postId) {
              return {
                ...post,
                isLiked: !post.isLiked,
                likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1,
              };
            }
            return post;
          })
        );

        // API call to update like
        const token = localStorage.getItem('token') || '';
        const likeResponse = await axios.put(
          `http://localhost:5000/api/posts/${postId}/like`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const { likeCount, isLiked } = likeResponse.data;

        // Sync posts with server response
        setPosts(prevPosts =>
          prevPosts.map(post => {
            if (post._id === postId) {
              return { ...post, isLiked, likeCount };
            }
            return post;
          })
        );
        break;

case 'comment':
  const isOpening = !showComments[postId];

  setShowComments(prev => ({
    ...prev,
    [postId]: !prev[postId]
  }));

  if (!commentInputs[postId]) {
    setCommentInputs(prev => ({ ...prev, [postId]: '' }));
  }

  // Fetch comments only if opening and not already loaded
  if (isOpening && !postComments[postId]) {
    try {
      const token = localStorage.getItem('token'); // ✅ get token first
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const commentsResponse = await axios.get(
        `http://localhost:5000/api/posts/${postId}/comments`,
        { headers }
      );

      setPostComments(prev => ({
        ...prev,
        [postId]: commentsResponse.data.comments || [],
      }));
    } catch (error) {
      console.error('Failed to fetch comments:', error);
      setPostComments(prev => ({ ...prev, [postId]: [] }));
    }
  }
  break;

    }
  } catch (err) {
    console.error('Error handling interaction:', err);

    // Rollback optimistic like if API fails
    if (action === 'like') {
      setPosts(prevPosts =>
        prevPosts.map(post => {
          if (post._id === postId) {
            return {
              ...post,
              isLiked: !post.isLiked,
              likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1,
            };
          }
          return post;
        })
      );
    }
  }
};





const handleSubmitComment = async (postId) => {
  const commentText = commentInputs[postId]?.trim();
  if (!commentText || !isAuthenticated) return;

  try {
    setSubmittingComment(prev => ({ ...prev, [postId]: true }));

    const response = await axios.post(
      `http://localhost:5000/api/posts/${postId}/comments`,
      { content: commentText },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );

    const newComment = response.data.comment; // ✅ get the comment, not the whole response

    setPostComments(prev => ({
      ...prev,
      [postId]: [newComment, ...(prev[postId] || [])],
    }));

    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post._id === postId) {
          return { ...post, commentCount: post.commentCount + 1 };
        }
        return post;
      })
    );

    setCommentInputs(prev => ({ ...prev, [postId]: '' }));
  } catch (err) {
    console.error('Error submitting comment:', err);
  } finally {
    setSubmittingComment(prev => ({ ...prev, [postId]: false }));
  }
};

const handleDeleteCommentClick = (postId, commentId) => {
  setDeleteCommentTarget({ postId, commentId });
  setShowDeleteCommentModal(true);
};

const cancelDeleteComment = () => {
  setDeleteCommentTarget(null);
  setShowDeleteCommentModal(false);
};

const confirmDeleteComment = async () => {
  if (!deleteCommentTarget) return;

  const { postId, commentId } = deleteCommentTarget;

  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`/api/posts/${postId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (response.ok) {
      setPostComments(prev => ({
        ...prev,
        [postId]: prev[postId].filter(comment => comment._id !== commentId)
      }));
      setPosts(prevPosts =>
        prevPosts.map(post => {
          if (post._id === postId) {
            return { ...post, commentCount: post.commentCount - 1 };
          }
          return post;
        })
      );
      showNotification('Comment deleted!', 'success');
    } else {
      const data = await response.json();
      showNotification(data.message || 'Failed to delete comment', 'error');
    }
  } catch (err) {
    console.error(err);
    showNotification('Failed to delete comment', 'error');
  } finally {
    setDeleteCommentTarget(null);
    setShowDeleteCommentModal(false);
  }
};




const handleSubmitReply = async (commentId, postId) => {
  const replyText = replyInputs[commentId]?.trim();
  if (!replyText || !isAuthenticated) return;

  try {
    setSubmittingReply(prev => ({ ...prev, [commentId]: true }));

    const response = await axios.post(
      `http://localhost:5000/api/posts/${postId}/comments/${commentId}/replies`,
      { content: replyText },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );

    const newReply = response.data.reply; // ✅ get the reply, not the whole response

    setPostComments(prev => ({
      ...prev,
      [postId]: prev[postId].map(comment => {
        if (comment._id === commentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          };
        }
        return comment;
      }),
    }));

    setReplyInputs(prev => ({ ...prev, [commentId]: '' }));
    setShowReplyInput(prev => ({ ...prev, [commentId]: false }));
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
  if (!replyInputs[commentId]) {
    setReplyInputs(prev => ({ ...prev, [commentId]: '' }));
  }
};

const createPost = async (postData) => {
  try {
    const response = await axios.post("http://localhost:5000/api/posts", postData);
    return { success: true, post: response.data.post };
  } catch (err) {
    console.error("Create post error:", err.response?.data || err.message);
    return { success: false, error: err.response?.data || err.message };
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

    // Check if already at 4 image limit
    if (selectedImages.length >= 4) {
      showNotification(
        'Upload Limit Reached',
        'You can only upload a maximum of 4 images per post.'
      );
      return;
    }

    // Directly open file picker
    document.getElementById('imageInput').click();
  };

  // Fetch author IDs safely
const authorIds = posts
  .map(p => (p.author && p.author._id ? p.author._id.toString() : null))
  .filter(Boolean);

const handleSubmitPost = async (e) => {
  e.preventDefault();
  if (!postContent.trim() && selectedImages.length === 0) return;

  try {
    setIsSubmitting(true);

    const postData = {
      content: postContent.trim(),
      images: selectedImages.map(img => ({
        url: img.url,
        alt: img.alt || 'User uploaded image'
      })),
    };

    const response = await createPost(postData);

    if (response.success && response.post) {
      if (response.approved) {
        // Only add to feed if approved
        setPosts(prevPosts => [response.post, ...prevPosts]);
        showNotification('Post created successfully!', 'success');
      } else {
        // Don't add to feed — only notify user
        showNotification('Your post has been sent for superadmin approval.', 'Thank you for interacting');
      }
    } else {
      showNotification('Failed to create post. Please try again.', 'error');
    }

    // Reset form
    setPostContent('');
    setSelectedImages([]);
    setShowCreateModal(false);

  } catch (err) {
    console.error('Error creating post:', err);
    showNotification('Failed to create post. Please try again.', 'error');
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
    
    if (count > 4) {
      return 'four-images-with-overlay';
    }
    
    return 'single-image';
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

// When user clicks delete from dropdown
// When user clicks delete from dropdown
const handleDeleteClick = (postId) => {
  setPostToDelete(postId);
  setShowDeleteModal(true);
};

// Confirm delete in modal
const confirmDelete = async () => {
  if (!postToDelete) return;

  try {
    const token = user?.token || localStorage.getItem("token");
    if (!token) throw new Error("No auth token found");

    const response = await fetch(`/api/posts/${postToDelete}`, {
      method: "DELETE",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });

    if (response.ok) {
      setPosts(prevPosts => prevPosts.filter(post => post._id !== postToDelete));
      showNotification('Post deleted successfully!', 'success');
    } else if (response.status === 401 || response.status === 403) {
      showNotification('You are not authorized. Please login again.', 'error');
    } else {
      const data = await response.json();
      showNotification(data.message || 'Failed to delete post. Please try again.', 'error');
    }

  } catch (error) {
    console.error(error);
    showNotification('Failed to delete post. Please try again.', 'error');
  } finally {
    setShowDeleteModal(false);
    setPostToDelete(null);
  }
};


// Cancel delete in modal
const cancelDelete = () => {
  setShowDeleteModal(false);
  setPostToDelete(null);
};

// When user clicks "Report" from dropdown
const handleReportClick = (postId) => {
  if (!isAuthenticated) {
    setShowAuthModal(true);
    return;
  }

  setReportingPostId(postId);
  setShowReportModal(true);
  setSelectedReportReason('');
  setCustomReportReason('');
};



// When clicking delete on a reply
const handleDeleteReplyClick = (postId, commentId, replyId) => {
  setDeleteReplyTarget({ postId, commentId, replyId });
  setShowDeleteReplyModal(true);
};

// Cancel deletion
const cancelDeleteReply = () => {
  setDeleteReplyTarget(null);
  setShowDeleteReplyModal(false);
};

// Confirm deletion
const confirmDeleteReply = async () => {
  if (!deleteReplyTarget) return;

  const { postId, commentId, replyId } = deleteReplyTarget;

  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`/api/posts/${postId}/comments/${commentId}/replies/${replyId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (response.ok) {
      // Remove reply from state
      setPostComments(prev => ({
        ...prev,
        [postId]: prev[postId].map(comment => {
          if (comment._id === commentId) {
            return {
              ...comment,
              replies: comment.replies.filter(r => r._id !== replyId)
            };
          }
          return comment;
        }),
      }));

      showNotification('Reply deleted!', 'success');
    } else {
      const data = await response.json();
      showNotification(data.message || 'Failed to delete reply', 'error');
    }
  } catch (err) {
    console.error(err);
    showNotification('Failed to delete reply', 'error');
  } finally {
    setDeleteReplyTarget(null);
    setShowDeleteReplyModal(false);
  }
};

const formatTime = (createdAt) => {
  const now = new Date();
  const date = new Date(createdAt);
  const diffInMinutes = Math.floor((now - date) / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 60) return `${diffInMinutes || 1}m`;
  if (diffInHours < 24) return `${diffInHours}h`;
  return `${diffInDays}d`;
};



// Submit report
const handleReportSubmit = async () => {
  if (!selectedReportReason || !reportingPostId) return;

  // If "Other", make sure custom reason is provided
  if (selectedReportReason === 'Other' && !customReportReason.trim()) {
    showNotification(
      'Missing Information',
      'Please provide a reason for reporting this post.'
    );
    return;
  }

  try {
    const token = user?.token || localStorage.getItem("token");
    if (!token) throw new Error("No auth token found");

    const reportReason = selectedReportReason === 'Other' ? customReportReason : selectedReportReason;

    // API call to backend
    await axios.post(
      `/api/reports/${reportingPostId}`,
      { reason: reportReason, customReason: selectedReportReason === 'Other' ? customReportReason : '' },
      { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
    );

    showNotification(
      'Report Submitted',
      "Thank you! We'll review this content."
    );

    // Reset modal state
    setShowReportModal(false);
    setReportingPostId(null);
    setSelectedReportReason('');
    setCustomReportReason('');

  } catch (err) {
    console.error(err);
    showNotification(
      'Report Failed',
      'Unable to submit your report. Please try again later.'
    );
  }
};

// Cancel report
const handleReportCancel = () => {
  setShowReportModal(false);
  setReportingPostId(null);
  setSelectedReportReason('');
  setCustomReportReason('');
};


  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setOffset(calculateInitialOffset());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentImageIndex]);

  
  return (
    <PageContainer>
      <ForumContainer>
        <CreatePost>
          <CreatePostHeader onClick={handleCreatePost}>
            <CreatePostAvatar style={{
              background: isAuthenticated && user?.avatar ? `url(${user.avatar}) center/cover` : '#f1f5f9',
              color: isAuthenticated && user?.avatar ? 'transparent' : 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {!isAuthenticated ? (
                <DefaultProfileIcon />
              ) : (
                isAuthenticated && !user?.avatar && user ? 
                  `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() : 
                  ''
              )}
            </CreatePostAvatar>
            {isAuthenticated ? "What's happening in pickleball?" : "Sign in to share what's happening in pickleball!"}
          </CreatePostHeader>
          
                      {showCreateModal && (
            <CreatePostInputContainer>
              <PostTextArea
                placeholder="Write something here..."
                value={postContent}
                onChange={(e) => {
                  setPostContent(e.target.value);
                  handleTextareaResize(e);
                }}
                style={{ width: '100%', minHeight: '48px', paddingLeft: '0px', paddingRight: '0px' }}
              />
              {selectedImages.length > 0 && (
                <ImagePreviewContainer>
                  <div className={`preview-grid ${getImageLayoutClass(selectedImages)}`}>
                    {getImageLayoutClass(selectedImages) === 'four-images-with-overlay' ? (
                      // Render first 3 images normally, 4th with overlay
                      <>
                        {selectedImages.slice(0, 3).map((image, index) => (
                      <ImagePreview key={index} className="preview-image">
                        <img src={image.url} alt={`Selected ${index + 1}`} />
                        <RemoveImageButton onClick={() => removeImage(index)}>
                          <CloseIcon />
                        </RemoveImageButton>
                      </ImagePreview>
                    ))}
                        <ImagePreview className="preview-image overlay-preview" data-remaining={selectedImages.length - 3}>
                          <img src={selectedImages[3].url} alt={`Selected 4`} />
                          <RemoveImageButton onClick={() => removeImage(3)}>
                            <CloseIcon />
                          </RemoveImageButton>
                          <div className="overlay-indicator">
                            +{selectedImages.length - 3}
                  </div>
                        </ImagePreview>
                      </>
                    ) : (
                      // Render normally for 1-4 images
                      selectedImages.map((image, index) => (
                        <ImagePreview key={index} className="preview-image">
                          <img src={image.url} alt={`Selected ${index + 1}`} />
                          <RemoveImageButton onClick={() => removeImage(index)}>
                            <CloseIcon />
                          </RemoveImageButton>
                        </ImagePreview>
                      ))
                    )}
                  </div>
                </ImagePreviewContainer>
              )}
            </CreatePostInputContainer>
          )}
          
          <CreatePostOptions>
            <ImageUploadButton 
              onClick={handlePhotoVideoClick}
              style={{
                opacity: selectedImages.length >= 4 ? 0.5 : 1,
                cursor: selectedImages.length >= 4 ? 'not-allowed' : 'pointer'
              }}
            >
              <ImageIcon />
              {selectedImages.length >= 4 
                ? 'Max 4 images' 
                : selectedImages.length === 0 
                  ? 'Photo/Video' 
                  : `Add Photo (${4 - selectedImages.length} left)`
              }
            </ImageUploadButton>
            {showCreateModal && (
              <SubmitButton
  type="button"
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
                  // Calculate how many more images we can add (max 4 total)
                  const remainingSlots = 4 - selectedImages.length;
                  
                  // Take only the number of files that fit within the limit
                  const filesToProcess = files.slice(0, remainingSlots);
                  
                  if (files.length > remainingSlots) {
                    showNotification(
                      'Some Images Skipped',
                      `You can only add ${remainingSlots} more image(s). Only the first ${remainingSlots} image(s) will be selected.`
                    );
                  }
                  
                  // Create preview URLs for the selected images
                  const imagePreviewsPromises = filesToProcess.map(file => {
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
                    setSelectedImages(prev => [...prev, ...imagePreviews]);
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

{!loading && !error && posts
  .filter(post =>
    post.status === 'approved' || post.author?._id === user?.id
  )
 // show approved posts even if not logged in
  .map(post => (
    <PostContainer key={post._id}>
      <Post>
        <PostHeader>
<Avatar
  src={post.author?.avatar || undefined}
  style={{
    backgroundColor: post.author?.avatar ? "transparent" : "#4df3c9ff",
    fontWeight: "bold"
  }}
>
  {!post.author?.avatar ? (post.author?.initials || "") : ""}
</Avatar>

<PostAuthor>
  <h3>
    {post.author
      ? [post.author.firstName, post.author.lastName].filter(Boolean).join(' ')
      : 'Unknown User'}
  </h3>
</PostAuthor>
          {/* Top-right menu */}
          <MenuContainer>
            <MenuToggle
              onClick={() =>
                setOpenMenu(prev => ({
                  ...prev,
                  [post._id]: !prev[post._id]
                }))
              }
            >
              <FaEllipsisH />
            </MenuToggle>

            {openMenu[post._id] && (
              <MenuDropdown>
                {post.author?._id === user?.id ? (
                  <Dropdown.Item onClick={() => handleDeleteClick(post._id)}>
                    <FiTrash2 style={{ marginRight: "8px", color: "#ef4444" }} /> Delete
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item onClick={() => handleReportClick(post._id)}>
                    <FiFlag style={{ marginRight: "8px", color: "#f59e0b" }} /> Report
                  </Dropdown.Item>
                )}
              </MenuDropdown>
            )}
          </MenuContainer>
        </PostHeader>

        <PostContent>
          <p>
            {expandedPosts[post._id] || (post.content?.length || 0) <= 200
              ? post.content || ''
              : truncateText(post.content || '', 200)}
          </p>

          {(post.content?.length || 0) > 200 && (
            <SeeMoreButton onClick={() => togglePostExpansion(post._id)}>
              {expandedPosts[post._id] ? 'See less' : 'See more'}
            </SeeMoreButton>
          )}

          {post.images?.length > 0 && (
            <PostImages className={getImageLayoutClass(post.images)}>
              {getImageLayoutClass(post.images) === 'four-images-with-overlay' ? (
                <>
                  {post.images.slice(0, 3).map((image, index) => (
                    <div key={image.id || index} className="image-container">
                      <img
                        src={image.url}
                        alt={image.alt || 'Post image'}
                        onClick={() => openCarousel(post.images, index)}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  ))}
                  {post.images.length > 3 && (
                    <div 
                      className="image-container overlay" 
                      data-remaining={post.images.length - 3}
                      onClick={() => openCarousel(post.images, 3)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={post.images[3]?.url} alt={post.images[3]?.alt || 'Post image'} />
                    </div>
                  )}
                </>
              ) : (
                post.images.map((image, index) => (
                  <img
                    key={image.id || index}
                    src={image.url}
                    alt={image.alt || 'Post image'}
                    onClick={() => openCarousel(post.images, index)}
                    style={{ cursor: 'pointer' }}
                  />
                ))
              )}
            </PostImages>
          )}
        </PostContent>

<PostActions>
  <button
    onClick={(e) => {
      if (!user) {
        setShowAuthModal(true);
        return;
      }
      handleInteraction(e, 'like', post._id);
    }}
    style={{
      color: post.isLiked ? '#ef4444' : '#64748b',
      fontWeight: post.isLiked ? '600' : '400'
    }}
  >
    <HeartIcon filled={post.isLiked} /> {post.likeCount}
  </button>

  <button
    onClick={(e) => {
      if (!user) {
        setShowAuthModal(true);
        return;
      }
      handleInteraction(e, 'comment', post._id);
    }}
  >
    <CommentIcon /> {post.commentCount}
  </button>
</PostActions>



        {/* Comments Section (only if logged in) */}
{user && showComments[post._id] && (
  <CommentSection>
    {/* Add Comment Input */}
    <CommentInput>
      <CommentAvatar
        style={{
          background: user?.avatar ? `url(${user.avatar}) center/cover` : '#29ba9b',
          color: user?.avatar ? 'transparent' : 'white'
        }}
      >
        {!user?.avatar && typeof user?.name === 'string'
          ? user.name.split(' ').map(n => n[0]).join('').toUpperCase()
          : ''}
      </CommentAvatar>

      <CommentTextArea
        placeholder="Add a comment..."
        value={commentInputs[post._id] || ''}
        onChange={e =>
          setCommentInputs(prev => ({ ...prev, [post._id]: e.target.value }))
        }
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmitComment(post._id);
          }
        }}
      />

      <CommentSubmitButton
        onClick={() => handleSubmitComment(post._id)}
        disabled={!commentInputs[post._id]?.trim() || submittingComment[post._id]}
      >
        <SendIcon />
      </CommentSubmitButton>
    </CommentInput>

    {/* Comments List */}
    {postComments[post._id]?.length > 0 && (
      <CommentsList>
        {postComments[post._id].map(comment => (
          <div key={comment._id}>
            <CommentItem>
              <CommentAvatar
                style={{
                  background: comment.author?.avatar ? `url(${comment.author.avatar}) center/cover` : '#29ba9b',
                  color: comment.author?.avatar ? 'transparent' : 'white'
                      }}>
                {!comment.author?.avatar ? comment.author?.initials : ''}
            </CommentAvatar>
              <CommentItemContent>
                <p className="comment-content">
                  <span className="comment-author">{comment.author?.firstName} {comment.author?.lastName}</span>
                  <span className="comment-text">{comment.content}</span>
                </p>
                <div className="comment-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span className="comment-time" style={{ marginRight: '10px' }}>{formatTime(comment.createdAt)}</span>
                    <button className="comment-reply" style={{ marginRight: '10px' }} onClick={() => handleReplyClick(comment._id)} >Reply</button>
                    {(comment.author?._id === user?.id || post.author?._id === user?.id) && (
                    <button className="comment-delete" onClick={() => handleDeleteCommentClick(post._id, comment._id)} >Delete</button>
                    )}
                  </div> 
                </div>                
              </CommentItemContent>
            </CommentItem>


{comment.replies && comment.replies.length > 0 && (
  <ViewRepliesButton>
    <div className="view-replies">
      <button onClick={() => setShowReplies(prev => ({
        ...prev,
        [comment._id]: !prev[comment._id]  // use _id instead of id
      }))}>
        {showReplies[comment._id] 
          ? 'Hide replies' 
          : `View replies (${comment.replies.length})`} 
      </button>
    </div>
  </ViewRepliesButton>
)}

            {/* Replies */}
{showReplies[comment._id] && comment.replies?.length > 0 && (
  <ReplySection>
    {comment.replies.map(reply => (
      <ReplyItem key={reply._id}>
        <ReplyAvatar
          style={{
            background: reply.author?.avatar ? `url(${reply.author.avatar}) center/cover` : '#29ba9b',
            color: reply.author?.avatar ? 'transparent' : 'white'
          }}
        >
          {!reply.author?.avatar ? reply.author?.initials : ''}
        </ReplyAvatar>

        <ReplyContent>
          <p className="reply-content">
            <span className="reply-author">{reply.author?.firstName} {reply.author?.lastName}</span>
            <span className="reply-text">{reply.content}</span>
          </p>

          <div className="reply-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <span className="reply-time">{formatTime(reply.createdAt)}</span>
    {(reply.author?._id === user?.id || comment.author?._id === user?.id || post.author?._id === user?.id) && (
   <button className="reply-delete" onClick={() => handleDeleteReplyClick(post._id, comment._id, reply._id)} >Delete</button>
    )}
  </div>
</div>
        </ReplyContent>
      </ReplyItem>
    ))}
  </ReplySection>
)}


            {/* Reply Input */}
            {showReplyInput[comment._id] && (
              <ReplySection>
                <ReplyInput>
                  <ReplyAvatar
                    style={{
                      background: user?.avatar ? `url(${user.avatar}) center/cover` : '#29ba9b',
                      color: user?.avatar ? 'transparent' : 'white'
                    }}
                  >
                    {!user?.avatar && typeof user?.name === 'string'
                      ? user.name.split(' ').map(n => n[0]).join('').toUpperCase()
                      : ''}
                  </ReplyAvatar>
                  <ReplyTextArea
                    placeholder="Reply..."
                    value={replyInputs[comment._id] || ''}
                    onChange={e =>
                      setReplyInputs(prev => ({ ...prev, [comment._id]: e.target.value }))
                    }
                    onKeyPress={e => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSubmitReply(comment._id, post._id);
                      }
                    }}
                  />
                  <ReplySubmitButton
                    onClick={() => handleSubmitReply(comment._id, post._id)}
                    disabled={!replyInputs[comment._id]?.trim() || submittingReply[comment._id]}
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
    </PostContainer>
))}


        {!loading && !error && posts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
            No posts yet. Be the first to share!
          </div>
        )}

        {/* Notification Popup */}
        {notification.show && (
          <NotificationPopup>
            <NotificationContent>
              <NotificationIcon>
                <WarningIcon />
              </NotificationIcon>
              <NotificationText>
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>
              </NotificationText>
              <NotificationClose onClick={hideNotification}>
                <CloseIcon />
              </NotificationClose>
            </NotificationContent>
          </NotificationPopup>
        )}

        {showAuthModal && (
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            title="Join the Conversation!"
            message="Sign in or register to interact with the community"
          />
        )}

{showDeleteModal && (
  <div style={{
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  }}>
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "300px",
      textAlign: "center"
    }}>
      <h3>Are you sure?</h3>
      <p>This action cannot be undone.</p>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button onClick={cancelDelete} style={{ padding: "8px 12px" }}>Cancel</button>
        <button onClick={confirmDelete} style={{ padding: "8px 12px", background: "red", color: "white" }}>Delete</button>
      </div>
    </div>
  </div>
)}
{showDeleteCommentModal && (
  <div style={{
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  }}>
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "300px",
      textAlign: "center"
    }}>
      <h3>Are you sure you want to delete this comment?</h3>
      <p>This action cannot be undone.</p>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button onClick={cancelDeleteComment} style={{ padding: "8px 12px" }}>Cancel</button>
        <button onClick={confirmDeleteComment} style={{ padding: "8px 12px", background: "red", color: "white" }}>Delete</button>
      </div>
    </div>
  </div>
)}
{showDeleteReplyModal && (
  <div style={{
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  }}>
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "300px",
      textAlign: "center"
    }}>
      <h3>Are you sure you want to delete this reply?</h3>
      <p>This action cannot be undone.</p>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button onClick={cancelDeleteReply} style={{ padding: "8px 12px" }}>Cancel</button>
        <button onClick={confirmDeleteReply} style={{ padding: "8px 12px", background: "red", color: "white" }}>Delete</button>
      </div>
    </div>
  </div>
)}


        {/* Report Modal */}
        {showReportModal && (
          <ReportModal onClick={handleReportCancel}>
            <ReportModalContent onClick={e => e.stopPropagation()}>
              <ReportModalHeader>
                <h3>Report Post</h3>
                <button onClick={handleReportCancel}>
                  <CloseIcon />
                </button>
              </ReportModalHeader>
              <ReportModalBody>
                <p>Help us understand what's happening. Why are you reporting this post?</p>
                <div>
                  {[
                    'Spam or misleading',
                    'Harassment or bullying',
                    'Inappropriate content',
                    'Violence or dangerous behavior',
                    'Hate speech',
                    'False information',
                    'Other'
                  ].map(reason => (
                    <ReportOption
                      key={reason}
                      $selected={selectedReportReason === reason}
                      onClick={() => setSelectedReportReason(reason)}
                    >
                      {reason}
                    </ReportOption>
                  ))}
                </div>
                {selectedReportReason === 'Other' && (
                  <CustomReasonInput
                    placeholder="Please describe why you're reporting this post..."
                    value={customReportReason}
                    onChange={(e) => setCustomReportReason(e.target.value)}
                  />
                )}
              </ReportModalBody>
              <ReportModalFooter>
                <ReportCancelButton onClick={handleReportCancel}>
                  Cancel
                </ReportCancelButton>
                <ReportSubmitButton 
                  onClick={handleReportSubmit}
                  disabled={!selectedReportReason || (selectedReportReason === 'Other' && !customReportReason.trim())}
                >
                  Submit Report
                </ReportSubmitButton>
              </ReportModalFooter>
            </ReportModalContent>
          </ReportModal>
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
                    key={image.id || image._id}
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