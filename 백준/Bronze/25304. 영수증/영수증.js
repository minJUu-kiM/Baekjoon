const fs = require("fs");

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const bill = Number(input[0]);
const N = Number(input[1]);

var money = 0;
for (let i = 2; i < N + 2; i++) {
  const [price, count] = input[i].split(" ").map(Number);
  money += price * count;
}

if (money === bill) {
  console.log("Yes");
} else {
  console.log("No");
}
