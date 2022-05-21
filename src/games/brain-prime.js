import getRandomInt from '../math.js';

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

  const gameQuestion = `${int}`;
  const rightAnswer = (isPrime(int) ? 'yes' : 'no');

  const result = [gameQuestion, rightAnswer];

  return result;
};

export { brainPrimeTask, generateBrainPrime };
