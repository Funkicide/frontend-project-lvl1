import readlineSync from 'readline-sync';
import greetUser, { getRandomInt } from '../src/index.js';

const brainEvenGame = () => {
  const userName = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let isCorrect = false;
  let correctAnswerCount = 0;

  do {
    const RandomInt = getRandomInt();
    const isEven = RandomInt % 2 === 0;
    console.log(`Question: ${RandomInt}`);
    const userInput = readlineSync.question('Your answer: ', {
      limit: ['yes', 'no'],
      limitMessage: `${userName}, answer "yes" or "no", please.`,
    });
    const isYes = (userInput === 'yes' || userInput === 'Yes');
    const isCorrectAnswer = (isYes === isEven);
    const rightAnswer = (isEven ? 'yes' : 'no');
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

export default brainEvenGame;
