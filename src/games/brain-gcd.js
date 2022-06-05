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
  const firstInt = getRandomInt();
  const secondInt = getRandomInt();

  const question = `${firstInt} ${secondInt}`;
  const answer = String(getGcd(firstInt, secondInt));

  return [question, answer];
};

const runBrainGcd = () => engine(task, generateRound);

export default runBrainGcd;
