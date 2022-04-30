data = require("./data/keydata.json");
const express = require("express");
const router = express.Router();
const { blindSign, inv } = require("./functions/signFunc");

router.post("/", (req, res) => {
	try {
		//apply random operation (now skipping)
		console.log(typeof req.body.msg);
		console.log(req.body.msg);
		const rand = Math.floor(Math.random() * data.n);
		const signed_msg = (req.body.msg * Math.pow(rand, data.e)) % data.n;
		// You signed the message as ...
		let ret_msg = blindSign(signed_msg);
		ret_msg = (ret_msg * inv(rand)) % data.n;

		// The decrypted message is:
		const dec_msg = Math.pow(ret_msg, data.e) % data.n;
		console.log(dec_msg);
		console.log(ret_msg, signed_msg);
		// The message after the bank signed
		res.send({ ret_msg, signed_msg });
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
