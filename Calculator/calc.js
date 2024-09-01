const sum = (a, b) => {
  return console.log(`Sum = ${Number(a) + Number(b)}`);
};

const sub = (a, b) => {
  return console.log(`Subtraction = ${a - b}`);
};

const Multiplication = (a, b) => {
  return console.log(`Multiplication  = ${a * b}`);
};

const division = (a, b) => {
  return console.log(`Divison = ${a / b}`);
};

module.exports = { sum, sub, Multiplication, division };
