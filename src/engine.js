import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const roundsCount = 3;

const generateGame = (gameTask, generateRound) => {
  const userName = greetUser();

  console.log(gameTask);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [gameQuestion, rightAnswer] = generateRound();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default generateGame;
