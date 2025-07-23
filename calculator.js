import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });
console.log("Hello this is the calculator!");

function askOperand() {
  let leftOperand = prompt("Please give the first number or just quit");
  if (leftOperand === "quit") {
    process.exit(0);
  }
  while (isNaN(leftOperand)) {
    leftOperand = prompt("Please give a valid number.");
  }

  return leftOperand;
}
function askOperand2() {
  let rightOperand = prompt("Please give the second number or just quit");
  if (rightOperand === "quit") {
    process.exit(0);
  }
  while (isNaN(rightOperand)) {
    rightOperand = Number(prompt("Please give a valid number."));
  }
  return rightOperand;
}

function askOperator() {
  let operator = prompt("Please give a operator(+,-,*,/) or just quit");
  if (operator === "quit") {
    process.exit(0);
  }
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
    if (rightOperand === 0) {
      console.log("You cant do this with 0.");
      process.exit(0);
    }
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
