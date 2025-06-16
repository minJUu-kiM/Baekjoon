const fs = require("fs");

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

upper_str = input.toUpperCase();
const arr = [];

for (let i = 0; i < upper_str.length; i++) {
  const alphabet = upper_str.substring(i, i + 1);
  arr.push(alphabet);
}

const count = {};

for (let i = 0; i < arr.length; i++) {
  const char = arr[i];
  count[char] = (count[char] || 0) + 1;
}

let maxCount = 0;
let result = "";

for (let key in count) {
  if (count[key] > maxCount) {
    maxCount = count[key];
    result = key;
  } else if (count[key] === maxCount) {
    result = "?";
  }
}

console.log(result);


