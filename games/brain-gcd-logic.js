import readlineSync from 'readline-sync';
import { getGcd, getRandomInt } from '../src/index.js';

const brainGcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let isCorrect = false;
  let correctAnswerCount = 0;

  do {
    const randomNum1 = getRandomInt();
    const randomNum2 = getRandomInt();
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const userInput = readlineSync.questionInt('Your answer ');
    const isRight = (userInput === getGcd(randomNum1, randomNum2));
    if (isRight) {
      console.log('Correct!');
      isCorrect = true;
      correctAnswerCount += 1;
    } else {
      console.log(`${userInput} is wrong answer ;(. Correct answer was ${getGcd(randomNum1, randomNum2)}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } while (isCorrect && correctAnswerCount < 3);

  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainGcdGame;
