import generateGame from '../engine.js';
import getRandomInt from '../utils.js';

const task = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateRound = () => {
  const operand1 = getRandomInt();
  const operand2 = getRandomInt();

  const operators = Object.keys(operations);
  const operator = operators[getRandomInt(0, 2)];
  const operationResult = operations[operator](operand1, operand2);

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(operationResult);

  return [question, answer];
};

const runBrainCalc = () => generateGame(task, generateRound);

export default runBrainCalc;
