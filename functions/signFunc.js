data = require("../data/keydata.json");
const n = data.n,
	d = data.d;

function inv(num) {
	return mod_exp(num, data.phin, n);
}

function mod_exp(a, b, n) {
	if (b === 0) return 1;

	let c = mod_exp(a, Math.floor(b / 2), n),
		ans = 1;

	if (b % 2) ans = a;

	return (ans * ((c * c) % n)) % n;
}

function blindSign(msg) {
	let m = msg;
	return mod_exp(m, d, n);
}

// console.log(blindSign(56));

module.exports = { blindSign, inv };
