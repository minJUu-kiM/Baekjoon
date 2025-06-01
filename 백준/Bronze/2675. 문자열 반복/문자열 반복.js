const fs = require("fs");

// 입력값이 하나일때
//const input = require("fs").readFileSync("input.txt").toString().trim();

//입력값 사이에 공백이 있을때  | 정수로 바꾸려면 .map(Number)
//const input = fs.readFileSync("input.txt").toString().trim().split(" ");

// 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

//첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
//const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  const [cntStr, word] = input[i].split(" ");
  const cnt = Number(cntStr);

  let result = "";
  for (let j = 0; j < word.length; j++) {
    result += word[j].repeat(cnt);
  }
  console.log(result);
}

// /dev/stdin