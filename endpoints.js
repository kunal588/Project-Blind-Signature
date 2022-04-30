data = require("./data/keydata.json");
const express = require("express");
const router = express.Router();
const { blindSign, inv, mod_exp } = require("./functions/signFunc");

router.post("/", (req, res) => {
  try {
    //apply random operation (now skipping)
    console.log(typeof req.body.msg);
    console.log(req.body.msg);

    //Genrating Random no. ranging from 1 to n-1
    const rand = Math.floor(Math.random() * data.n);

    //Multiplying Msg from with Blind factor m' = (m.(r^e))%n
    const signed_msg = (req.body.msg * mod_exp(rand, data.e, data.n)) % data.n;

    // Sending Encrypted Message to Voting Authority s' = ((m'^d)%n)
    let ret_msg1 = blindSign(signed_msg);

    // Removing Blind Factor :- s = (s'/r%n)%n
    let ret_msg = (ret_msg1 * inv(rand)) % data.n;

    // We may also decrypt the message to , it will give us original back :- m =(s^e)%n
    const dec_msg = mod_exp(ret_msg, data.e, data.n);

    res.send({ signed_msg, ret_msg1, ret_msg });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
