import getRandomInt from '../math.js';

const brainCalcTask = 'What is the result of the expression?';

const generateBrainCalc = () => {
  const firstInt = getRandomInt();
  const secondInt = getRandomInt();

  const operations = {
    '+': firstInt + secondInt,
    '-': firstInt - secondInt,
    '*': firstInt * secondInt,
  };

  const operators = Object.keys(operations);
  const operator = operators[getRandomInt(0, 2)];

  const gameQuestion = `${firstInt} ${operator} ${secondInt}`;
  const rightAnswer = `${operations[operator]}`;

  const result = [gameQuestion, rightAnswer];

  return result;
};

export { brainCalcTask, generateBrainCalc };
