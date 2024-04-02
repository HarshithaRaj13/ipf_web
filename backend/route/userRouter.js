const { saveUser } = require("../controller/userController");

const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test is successfull");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  res.send("your user name is : " + username);
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});

router.post("/signUp", saveUser);

async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ username: email, password });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = router;

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require("dotenv").config();

// const userRouter = require("./route/userRouter");

// const app = express();
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on(
//   "error",
//   console.error.bind(console, "MongoDB connection error:")
// );

// app.use(bodyParser.json());

// // POST endpoint to store user data
// app.post("/", userRouter);

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });
