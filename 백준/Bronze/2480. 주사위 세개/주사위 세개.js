const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dice1 = input[0];
const dice2 = input[1];
const dice3 = input[2];

if (dice1 === dice2 && dice2 === dice3) {
  console.log(10000 + dice1 * 1000);
} else if (dice1 === dice2 || dice1 === dice3 || dice2 === dice3) {
  if (dice1 === dice2) {
    console.log(1000 + dice1 * 100);
  } else if (dice1 === dice3) {
    console.log(1000 + dice1 * 100);
  } else {
    console.log(1000 + dice2 * 100);
  }
} else {
  const max = Math.max(dice1, dice2, dice3);
  console.log(max * 100);
}
