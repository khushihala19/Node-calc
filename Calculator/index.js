const { sum, sub, Multiplication, division} = require("./calc");

const prompt = require("prompt-sync")();
console.log("Enter 1 for Sum, 2 for Substract, 3 For Multiply, 4 For Divison");
let opr = prompt();

if (opr == "1") {
  console.log("Enter a : ");
  let a = prompt();
  console.log("Enter b : ");
  let b = prompt();
  sum(a, b);
}
if (opr == "2") {
  console.log("Enter a : ");
  let a = prompt();
  console.log("Enter b : ");
  let b = prompt();
  sub(a, b);
}
if (opr == "3") {
  console.log("Enter a : ");
  let a = prompt();
  console.log("Enter b : ");
  let b = prompt();
  Multiplication(a, b);
}

if (opr == "4") {
  console.log("Enter a : ");
  let a = prompt();
  console.log("Enter b : ");
  let b = prompt();
  division(a, b);
}
