const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("user page");
});

module.exports = router;
