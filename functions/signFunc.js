data = require("../data/keydata.json");
const n = data.n,
  d = data.d;

function inv(a) {
  let m = n;
  [a, m] = [Number(a), Number(m)];

  if (Number.isNaN(a) || Number.isNaN(m)) {
    return NaN; // invalid input
  }
  a = ((a % m) + m) % m;
  if (!a || m < 2) {
    return NaN; // invalid input
  }
  // find the gcd
  const s = [];
  let b = m;
  while (b) {
    [a, b] = [b, a % b];
    s.push({ a, b });
  }
  if (a !== 1) {
    return NaN; // inverse does not exists
  }
  // find the inverse
  let x = 1;
  let y = 0;
  for (let i = s.length - 2; i >= 0; --i) {
    [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)];
  }
  return ((y % m) + m) % m;
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

module.exports = { blindSign, inv, mod_exp };
