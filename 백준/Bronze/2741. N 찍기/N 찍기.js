const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

for (let i = 0; i < input; i++) {
  console.log(i + 1);
}
