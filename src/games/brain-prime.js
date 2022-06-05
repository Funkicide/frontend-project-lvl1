import engine from '../engine.js';
import getRandomInt from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generateRound = () => {
  const int = getRandomInt();

  const question = String(int);
  const answer = (isPrime(int) ? 'yes' : 'no');

  return [question, answer];
};

const runBrainPrime = () => engine(task, generateRound);

export default runBrainPrime;
