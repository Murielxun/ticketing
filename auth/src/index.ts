import mongoose from 'mongoose';

import { app } from './app';

const start = async () => {
  console.log('Starting..........');
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    // mongo db is in the pod, need to connect to its cluster ip service
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connecting to Auth DB');
  } catch (error) {
    console.log(error);
  }
  app.listen(3000, () => {
    console.log('auth on port 3000!!!!');
  });
};

start();
