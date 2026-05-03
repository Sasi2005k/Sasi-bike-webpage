import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  type: { type: String, enum: ['modification', 'ride_story', 'gallery'], required: true },
  category: { type: String, default: 'General' },
  cost: { type: Number, default: 0 },
  user: { type: String, default: 'Anonymous_Rider' },
  likes: { type: Number, default: 0 },
  isApproved: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
