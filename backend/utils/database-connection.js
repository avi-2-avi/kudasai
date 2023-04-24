import mongoose from 'mongoose';
import config from '../config/envs.js';


const connectToDatabase = () => {
    // Connect to the local MongoDB database
    mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    // Create a connection object
    const db = mongoose.connection;
    
    // Handle connection events
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB database');
    });
}

export default connectToDatabase