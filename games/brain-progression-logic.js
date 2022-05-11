import readlineSync from 'readline-sync';
import greetUser, { getRandomInt, getRandomOperator } from '../src/index.js';

const brainProgressionGame = () => {
  const userName = greetUser();
  console.log('What number is missing in the progression?');

  let isCorrect = false;
  let correctAnswerCount = 0;

  do {
    const randomInt = getRandomInt();
    const randomOperator = getRandomOperator();
    const getRandomStep = (operator) => {
      switch (operator) {
        case '+':
          return 1;
        case '-':
          return 3;
        default:
          return 5;
      }
    };

    const randomStep = getRandomStep(randomOperator);
    const randomIndex = Math.round(Math.random() * (9 - 0) + 0);
    const getRandomProgression = () => {
      const result = [];
      for (let i = randomInt; result.length < 10; i += randomStep) {
        result.push(i);
      }
      return result;
    };
    const randomProgression = getRandomProgression();

    const hideRandomElement = () => {
      const coll = [];
      for (let i = 0; i < randomProgression.length; i += 1) {
        if (i === randomIndex) {
          coll.push('..');
        } else {
          coll.push(randomProgression[i]);
        }
      }

      return coll.join(' ');
    };

    console.log(`Question: ${hideRandomElement(randomProgression)}`);
    const userInput = readlineSync.questionInt('Your answer ');
    const rightAnswer = (randomProgression[randomIndex]);
    const isCorrectAnswer = (userInput === rightAnswer);
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

export default brainProgressionGame;
