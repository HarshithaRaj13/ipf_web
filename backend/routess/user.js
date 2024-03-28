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

module.exports = router;
