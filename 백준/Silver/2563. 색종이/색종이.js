const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  for (let dy = y; dy < y + 10; dy++) {
    for (let dx = x; dx < x + 10; dx++) {
      paper[dy][dx] = 1; 
    }
  }
}

let total = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    total += paper[i][j]; 
  }
}

console.log(total);