import engine from '../engine.js';
import getRandomInt from '../math.js';

const brainCalcTask = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateBrainCalc = () => {
  const firstInt = getRandomInt();
  const secondInt = getRandomInt();

  const operators = Object.keys(operations);
  const operator = operators[getRandomInt(0, 2)];
  const operation = operations[operator](firstInt, secondInt);

  const gameQuestion = `${firstInt} ${operator} ${secondInt}`;
  const rightAnswer = `${operation}`;

  return [gameQuestion, rightAnswer];
};

const runBrainCalc = () => engine(brainCalcTask, generateBrainCalc);

export default runBrainCalc;
