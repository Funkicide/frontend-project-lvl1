import getRandomInt from '../math.js';

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
  const rightAnswer = getGcd(firstInt, secondInt);

  const result = [`${gameQuestion}`, `${rightAnswer}`];

  return result;
};

export { brainGcdTask, generateBrainGcd };
