import readlineSync from 'readline-sync';

const engine = (gameTask, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameTask);

  let correctAnswerCount = 0;

  do {
    const [gameQuestion, rightAnswer] = game();
    console.log('Question: ', gameQuestion);
    const userInput = readlineSync.question('Your answer: ');

    if (rightAnswer === userInput) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } while (correctAnswerCount < 3);

  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default engine;
