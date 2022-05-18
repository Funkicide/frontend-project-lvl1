import { getRandomInt } from '../math.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const runBrainPrime = () => {
  const randomInt = getRandomInt();

  const gameQuestion = `${randomInt}`;
  const rightAnswer = (isPrime(randomInt) ? 'yes' : 'no');

  const result = [gameQuestion, rightAnswer];

  return result;
};

export { gameTask, runBrainPrime };
