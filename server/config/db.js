import {MongoClient} from 'mongodb';

let db;

export const connectToMongoDB = async () => {
    const url = process.env.MongoDB_URL;
    if(!url)  throw new Error("Url doesn't exist");

    let client = new MongoClient(url);
    await client.connect();
    db = client.db('Cafe-Management');
    console.log("Database connected");
}
export const getDB = () => {
  if (!db) throw new Error('DB not initialized');
  return db;
};