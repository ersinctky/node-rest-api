const User = require("../models/User");

const router = require("express").Router();

router.post("/register", async (req, res) => {
  //create new user
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.username,
  });

  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
