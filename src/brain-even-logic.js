import readlineSync from 'readline-sync';

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let isCorrect = false;
  let correctAnswerCount = 0;

  do {
    const RandomInt = Math.round(Math.random() * (20 - 0) + 0);
    const isEven = RandomInt % 2 === 0;
    console.log(`Question: ${RandomInt}`);
    const userInput = readlineSync.question('Your answer ', {
    limit: ['yes', 'no',],
    limitMessage: `${userName}, answer "yes" or "no", please.`
    });
    const isYes = (userInput === 'yes' || userInput === 'Yes');
    const isNo = (userInput === 'no' || userInput === 'No');
    if (isEven === true && isYes === true) {
      console.log('Correct!');
      isCorrect = true;
      correctAnswerCount += 1;
    } else if (isEven === true && isNo === true) {
      console.log(`"${userInput}" is wrong answer ;(. Correct answer was "yes". Let's try again, ${userName}!`);
      break;
    } else if (isEven === false && isYes === true) {
      console.log(`"${userInput}" is wrong answer ;(. Correct answer was "no". Let's try again, ${userName}!`);
      break;
    } else if (isEven === false && isNo === true) {
      console.log('Correct!');
      isCorrect = true;
      correctAnswerCount += 1;
    }

  } while (isCorrect && correctAnswerCount < 3);

  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export { brainEvenGame };
