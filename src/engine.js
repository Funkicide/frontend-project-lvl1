import readlineSync from 'readline-sync';

const maxRoundCount = 3;

const engine = (gameTask, generateGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameTask);

  for (let i = 0; i < maxRoundCount; i += 1) {
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
