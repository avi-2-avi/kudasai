import mongoose from 'mongoose';

const PaperSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  accuracy: {
    type: Number,
    trim: true
  },
  abstract: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    trim: true
  },
  isBookmarked: {
    type: Boolean,
    trim: true
  }
});

const Paper = mongoose.model('Paper', PaperSchema);
export default Paper