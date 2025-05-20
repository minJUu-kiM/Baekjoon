const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [a, b, c, d, e] = input;
const result = a ** 2 + b ** 2 + c ** 2 + d ** 2 + e ** 2;
console.log(result % 10);