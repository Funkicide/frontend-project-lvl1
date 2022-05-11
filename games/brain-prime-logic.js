import readlineSync from 'readline-sync';
import greetUser, { getRandomInt } from '../src/index.js';

const brainPrimeGame = () => {
  const userName = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let isCorrect = false;
  let correctAnswerCount = 0;

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

  do {
    const randomInt = getRandomInt();
    console.log(`Question: ${randomInt}`);
    const userInput = readlineSync.question('Your answer: ', {
      limit: ['yes', 'no'],
      limitMessage: `${userName}, answer "yes" or "no", please.`,
    });
    const isYes = (userInput === 'yes' || userInput === 'Yes');
    const isCorrectAnswer = (isYes === isPrime(randomInt));
    const rightAnswer = (isPrime(randomInt) ? 'yes' : 'no');
    if (isCorrectAnswer) {
      console.log('Correct!');
      isCorrect = true;
      correctAnswerCount += 1;
    } else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } while (isCorrect && correctAnswerCount < 3);

  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainPrimeGame;
