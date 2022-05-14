import { getRandomInt } from '../math.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const runBrainGcd = () => {
  const randomInt1 = getRandomInt();
  const randomInt2 = getRandomInt();

  const gameQuestion = `${randomInt1} ${randomInt2}`;
  const rightAnswer = getGcd(randomInt1, randomInt2);

  const result = [`${gameQuestion}`, `${rightAnswer}`];

  return result;
};

export { gameTask, runBrainGcd };
