import mongoose from 'mongoose';
import config from '../config/envs.js'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: config.EMAIL_REGEX
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  bookmarks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paper'
  }]
});

const User = mongoose.model('User', UserSchema);
export default User