data = require("./data/keydata.json");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    //apply random operation (now skipping)
    msg = (req.msg * Math.pow(Math.random(data.n), data.e)) % data.n;
    blindSign(msg);
    res.send("Voted Securely");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
