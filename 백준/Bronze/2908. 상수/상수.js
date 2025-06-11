const fs = require("fs");

const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const rev = (s) => Number(s.split("").reverse().join(""));
const ra = rev(a);
const rb = rev(b);
console.log(Math.max(ra, rb));

