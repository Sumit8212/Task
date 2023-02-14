const prompt = require("prompt-sync")();
let a, b;
a =parseInt (prompt("enter first number :"));
b = parseInt(prompt("enter second number :"));

console.log( sumOfNum(a, b));
function sumOfNum(m, n) {
  if (m != n) {
    let sum = m + n;
    return sum*2;
  }else return sum;
}
// console.log(sum * 2);
