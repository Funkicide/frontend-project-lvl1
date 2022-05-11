import readlineSync from 'readline-sync';
import greetUser, { getRandomOperator, getRandomInt } from '../src/index.js';

const brainCalcGame = () => {
  const userName = greetUser();
  console.log('What is the result of the expression?');

  let isCorrect = false;
  let correctAnswerCount = 0;

  do {
    const randomInt1 = getRandomInt();
    const randomInt2 = getRandomInt();
    const randomOperator = getRandomOperator();
    const getValue = () => {
      switch (randomOperator) {
        case '+':
          return randomInt1 + randomInt2;
        case '-':
          return randomInt1 - randomInt2;
        default:
          return randomInt1 * randomInt2;
      }
    };

    const expression = `${randomInt1} ${randomOperator} ${randomInt2}`;
    const expValue = getValue();
    console.log(`Question: ${expression}`);
    const userInput = readlineSync.questionInt('Your answer: ');
    const isCorrectAnswer = (userInput === expValue);
    if (isCorrectAnswer) {
      console.log('Correct!');
      isCorrect = true;
      correctAnswerCount += 1;
    } else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${expValue}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } while (isCorrect && correctAnswerCount < 3);

  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainCalcGame;
