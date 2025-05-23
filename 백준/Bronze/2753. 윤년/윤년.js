const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();
const year = Number(input);

if (1 <= year && year <= 4000) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("1");
  } else {
    console.log("0");
  }
} else {
    
}