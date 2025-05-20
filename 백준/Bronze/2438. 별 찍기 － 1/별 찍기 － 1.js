const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();
const a = input;
for (let i = 0; i < a; i++) {
  console.log("*".repeat(i + 1));
}