const mongoose = require('mongoose');

const URI =
  "mongodb+srv://mattlim248:databasepassword@databasecluster.llyjnib.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

module.exports = connectDB;