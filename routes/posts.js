const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../models/User");

router.get("/", verify, async (req, res) => {
  //Id extracted from the token and then we find all the user info from the id
  User.findOne({ _id: req.user }, function(err, user) {
    res.send(user);
  });
});

module.exports = router;
