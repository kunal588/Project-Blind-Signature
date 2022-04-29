import data from "../data/keydata.json";
const n = BigInt(data.n),
  d = BigInt(data.d);

function mod_exp(a, b, n) {
  a = BigInt(a);
  if (b === 0n) return 1n;

  console.log(b);
  let c = BigInt(mod_exp(a, b / 2n, n)),
    ans = 1n;

  if (b % 2n) ans = a;

  return (ans * ((c * c) % n)) % n;
}

function blindSign(msg) {
  let m = BigInt(msg);
  return mod_exp(m, d, n);
}

console.log(blindSign(56));
