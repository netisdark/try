import dotenv from 'dotenv';
dotenv.config();

import session from 'express-session';
import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import { connectToMongoDB } from './config/db.js';
import router from './routes/routes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  }
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 5000;

app.use('/customer', express.static(path.join(__dirname, '../client/customer/dist')));
app.get(/^\/customer(\/.*)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/customer/dist/index.html'));
});

app.use('/admin', express.static(path.join(__dirname, '../client/admin/dist')));
app.get(/^\/admin(\/.*)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/admin/dist/index.html'));
});

app.use('/frontdesk', express.static(path.join(__dirname, '../client/frontDesk/dist')));
app.get(/^\/frontdesk(\/.*)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/frontDesk/dist/index.html'));
});

app.use('/advert', express.static(path.join(__dirname, '../client/cafeAdvert/dist')));
app.get(/^\/advert(\/.*)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/cafeAdvert/dist/index.html'));
});



app.use('/api', router);

const startServer = async () => {
  try {
    await connectToMongoDB();
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  } catch (err) {
    console.error("Failed to connect to DB", err);
    process.exit(1);
  }
};

startServer();
