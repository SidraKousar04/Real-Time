import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // this will store image URL for now
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
