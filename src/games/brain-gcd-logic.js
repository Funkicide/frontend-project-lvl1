import readlineSync from 'readline-sync';
import greetUser, { getRandomInt } from '../index.js';

const brainGcdGame = () => {
  const userName = greetUser();
  console.log('Find the greatest common divisor of given numbers.');

  const getGcd = (a, b) => {
    if (!b) {
      return a;
    }

    return getGcd(b, a % b);
  };

  let isCorrect = false;
  let correctAnswerCount = 0;

  do {
    const randomInt1 = getRandomInt();
    const randomInt2 = getRandomInt();
    console.log(`Question: ${randomInt1} ${randomInt2}`);
    const userInput = readlineSync.questionInt('Your answer: ');
    const isCorrectAnswer = (userInput === getGcd(randomInt1, randomInt2));
    if (isCorrectAnswer) {
      console.log('Correct!');
      isCorrect = true;
      correctAnswerCount += 1;
    } else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${getGcd(randomInt1, randomInt2)}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } while (isCorrect && correctAnswerCount < 3);

  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainGcdGame;
