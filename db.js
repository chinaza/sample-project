import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/dsv');
