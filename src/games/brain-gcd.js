import engine from '../engine.js';
import getRandomInt from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const generateRound = () => {
  const operand1 = getRandomInt();
  const operand2 = getRandomInt();

  const question = `${operand1} ${operand2}`;
  const answer = String(getGcd(operand1, operand2));

  return [question, answer];
};

const runBrainGcd = () => engine(task, generateRound);

export default runBrainGcd;
