const fs = require("fs");

//3 9 -> 이런식으로 두가지 숫자 입력받았을때
//const input = fs.readFileSync("input.txt").toString().trim().split(" ").map(Number);

// 여러줄로 입력 받았을때때
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  console.log(A + B);
}