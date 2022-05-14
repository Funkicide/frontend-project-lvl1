import { getRandomOperator, getRandomInt } from '../math.js';

const gameTask = 'What is the result of the expression?';

const runBrainCalc = () => {
  const randomInt1 = getRandomInt();
  const randomInt2 = getRandomInt();
  const randomOperator = getRandomOperator();

  const getValue = () => {
    switch (randomOperator) {
      case '+':
        return randomInt1 + randomInt2;
      case '-':
        return randomInt1 - randomInt2;
      default:
        return randomInt1 * randomInt2;
    }
  };
  const gameQuestion = `${randomInt1} ${randomOperator} ${randomInt2}`;
  const rightAnswer = getValue();

  const result = [gameQuestion, `${rightAnswer}`];

  return result;
};

export { gameTask, runBrainCalc };
