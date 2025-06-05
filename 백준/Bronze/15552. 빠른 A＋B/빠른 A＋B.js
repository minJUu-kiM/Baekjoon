const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);  
let answer = "";

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer += (a + b) + "\n";
}

console.log(answer);
