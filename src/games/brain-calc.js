import engine from '../engine.js';
import getRandomInt from '../utils.js';

const task = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateRound = () => {
  const firstInt = getRandomInt();
  const secondInt = getRandomInt();

  const operators = Object.keys(operations);
  const operator = operators[getRandomInt(0, 2)];
  const operation = operations[operator](firstInt, secondInt);

  const question = `${firstInt} ${operator} ${secondInt}`;
  const answer = String(operation);

  return [question, answer];
};

const runBrainCalc = () => engine(task, generateRound);

export default runBrainCalc;
