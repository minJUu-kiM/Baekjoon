const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

const result = [];
for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    result.push(A[i]);
  }
}

console.log(result.join(" "));