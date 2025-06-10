const fs = require('fs');
const input = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const scores = input[1].split(' ').map(Number);

const maxScore = Math.max(...scores);

const total = scores.reduce((acc, cur) => acc + (cur / maxScore) * 100, 0);

const average = total / n;

console.log(average);
