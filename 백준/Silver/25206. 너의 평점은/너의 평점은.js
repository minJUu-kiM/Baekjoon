const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const gradeToScore = {
  'A+': 4.5,
  'A0': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'F': 0.0,
};

let totalCredit = 0;
let totalScore = 0;

for (let i = 0; i < input.length; i++) {
  const [subject, creditStr, grade] = input[i].split(' ');
  const credit = parseFloat(creditStr);

  if (grade === 'P') continue;

  const score = gradeToScore[grade];
  totalCredit += credit;
  totalScore += credit * score;
}

const gpa = totalScore / totalCredit;
console.log(gpa.toFixed(6));