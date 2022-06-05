import engine from '../engine.js';
import getRandomInt from '../utils.js';

const brainPrimeTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generateBrainPrime = () => {
  const int = getRandomInt();

  const gameQuestion = String(int);
  const rightAnswer = (isPrime(int) ? 'yes' : 'no');

  return [gameQuestion, rightAnswer];
};

const runBrainPrime = () => engine(brainPrimeTask, generateBrainPrime);

export default runBrainPrime;
