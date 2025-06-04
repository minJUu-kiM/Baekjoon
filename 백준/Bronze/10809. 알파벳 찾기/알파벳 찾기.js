const fs = require("fs");
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const alphabet = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const code = input.charCodeAt(i) - "a".charCodeAt(0);
  if (alphabet[code] === -1) {
    alphabet[code] = i;
  }
}

console.log(alphabet.join(" "));
