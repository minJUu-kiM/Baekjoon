const fs = require("fs");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = [];

for (let i = 1; i < 31; i++) {
  if (input.includes(i)) {
    continue;
  } else {
    arr.push(i);
  }
}

arr.sort((a, b) => a - b);
console.log(arr[0]);
console.log(arr[1]);