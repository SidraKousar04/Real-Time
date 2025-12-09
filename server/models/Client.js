import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL or base64
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Client', clientSchema);
