const fs = require("fs");

// 입력값이 하나일때
//const input = require("fs").readFileSync("input.txt").toString().trim();

//입력값 사이에 공백이 있을때  | 정수로 바꾸려면 .map(Number)
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

//첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
//const input = require("fs").readFileSync("input.txt").toString().trim().split("\n")

const hour = input[0]; // 첫 번째 줄의 값
const minute = input[1]; // 두 번째 줄의 값

if ((minute, 45)) {
  if (minute < 45) {
    if (hour === 0) {
      console.log(23, minute + 15);
    } else {
      console.log(hour - 1, minute + 15);
    }
  } else if (minute >= 45) {
    console.log(hour, minute - 45);
  }
}

// /dev/stdin
