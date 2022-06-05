import engine from '../engine.js';
import getRandomInt from '../utils.js';

const brainGcdTask = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const generateBrainGcd = () => {
  const firstInt = getRandomInt();
  const secondInt = getRandomInt();

  const gameQuestion = `${firstInt} ${secondInt}`;
  const rightAnswer = String(getGcd(firstInt, secondInt));

  return [gameQuestion, rightAnswer];
};

const runBrainGcd = () => engine(brainGcdTask, generateBrainGcd);

export default runBrainGcd;
