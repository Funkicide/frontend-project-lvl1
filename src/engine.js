import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const roundsCount = 3;

const engine = (gameTask, generateGame) => {
  const userName = greetUser();

  console.log(gameTask);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [gameQuestion, rightAnswer] = generateGame();
    console.log(`Question: ${gameQuestion}`);
    const userInput = readlineSync.question('Your answer: ');

    if (rightAnswer !== userInput) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default engine;
