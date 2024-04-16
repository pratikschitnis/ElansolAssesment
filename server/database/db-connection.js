require('dotenv').config();
const mongoose = require('mongoose');

const DATABASE_URL = process.env.MONGODB_URI;

if (!DATABASE_URL) {
  throw new Error(
    "Please define the DATABASE_URL environment variable inside .env.local"
  );
}

let cachedConn = null;

// Function to establish MongoDB connection
async function connectDB() {
  if (cachedConn) {
    console.log("Connected by cache");
    return cachedConn;
  }

  try {

    const connection = await mongoose.connect(DATABASE_URL);
    cachedConn = connection;
    console.log("Connected to MongoDB");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = {
  connectDB,
  mongoose // You can still export mongoose if you need it elsewhere
};
