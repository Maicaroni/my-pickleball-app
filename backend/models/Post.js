const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  images: [{ url: String, alt: String }],
  likeCount: { type: Number, default: 0 },
  commentCount: { type: Number, default: 0 },
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [
            {
              author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
              content: String,
              createdAt: Date,
              replies: [
                {
                  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
                  content: String,
                  createdAt: Date,
                }
              ]
            }
          ]
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
