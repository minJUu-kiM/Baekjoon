const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

var cnt = 0;
var i = 0;

while (i < input.length) {
  if (input.substr(i, 3) === "dz=") {
    cnt++;
    i += 3;
  } else if (
    ["c=", "c-", "d-", "lj", "nj", "s=", "z="].includes(input.substr(i, 2))
  ) {
    cnt++;
    i += 2;
  } else {
    cnt++;
    i += 1;
  }
}

console.log(cnt);
