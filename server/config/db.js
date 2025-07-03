import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
  const url = process.env.MongoDB_URL;
  if (!url) throw new Error("Url doesn't exist");

  await mongoose.connect(url, {
    dbName: 'Cafe-Management',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Mongoose connected');
};

export const getDB = () => {
  return mongoose.connection.db;
};
