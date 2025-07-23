import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

function askOperand() {
  let leftOperand = Number(prompt("Please give the first number"));
  while (isNaN(leftOperand)) {
    leftOperand = Number(prompt("Please give a valid number."));
  }
  return leftOperand;
}
function askOperand2() {
  let rightOperand = Number(prompt("Please give the second number"));
  while (isNaN(rightOperand)) {
    rightOperand = Number(prompt("Please give a valid number."));
  }
  return rightOperand;
}

function askOperator() {
  let operator = prompt("Please give a operator(+,-,*,/)");
  while (!["+", "-", "*", "/"].includes(operator)) {
    operator = prompt("Please choose a valid operator");
  }
  return operator;
}
function calculate(leftOperand, operator, rightOperand) {
  if (operator === "+") {
    return leftOperand + rightOperand;
  }
  if (operator === "-") {
    return leftOperand - rightOperand;
  }
  if (operator === "*") {
    return leftOperand * rightOperand;
  }
  if (operator === "/") {
    return leftOperand / rightOperand;
  }
}
function main() {
  let number1 = askOperand();
  let number2 = askOperand2();
  let jel = askOperator();
  let result = calculate(number1, jel, number2);
  console.log(`The result is ${result}!`);
}
main();
