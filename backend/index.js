// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://user:Raj13051997@ipfdemo.ubbv7zh.mongodb.net/user?retryWrites=true&w=majority&appName=react-auth",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// Create a schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Create a model
const User = mongoose.model("User", userSchema);

app.use(bodyParser.json());

// POST endpoint to store user data
app.post("/api/users", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
