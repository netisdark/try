import { getDB } from "../../config/db.js";
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid Email' });
  }
  if (!name || !password) {
    return res.status(400).json({ message: 'Fill all the forms' });
  }

  try {
    const db = getDB();
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hash = await bcrypt.hash(password, 10);
    const role = 'customer';
    const result = await db.collection('users').insertOne({
      email,
      name,
      role,
      password: hash,
      date: new Date(),
    });

    req.session.user = {
      email,
      name,
      role,
      _id: result.insertedId
    };


    return res.status(200).json({ message: 'Account Created Successfully' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Fill all the forms' });
  }

  try {
    const db = getDB();
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Account not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect Password' });
    }
    req.session.user = {
      email: user.email,
      name: user.name,
      _id: user._id
    };
    return res.status(200).json({ message: 'Login Successful' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server Error' });
  }
};


export const account = async (req, res) => {
    return res.status(200).json(req.session.user);
}