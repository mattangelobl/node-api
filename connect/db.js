const mongoose = require('mongoose');
// require('dotenv').config();

const MONGO_URI='mongodb+srv://mattlim248:databasepassword@databasecluster.llyjnib.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

module.exports = connectDB;