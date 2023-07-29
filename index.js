const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const User = require("./models/User");
const cors = require("cors");
const connectDB = require("./connect/db");
const bcrypt = require("bcrypt");

app.use(cors());

connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  const { fullName, role, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user instance Mongoose model
    const newUser = new User({
      fullName,
      role,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Return a success response
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Handle any errors that occur during the signup process
    console.error("Error during signup:", error);
    res.status(500).json({ message: "An error occurred during signup" });
  }
});

app.post("/test", (req,res) =>{
  res.send("testing")
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
