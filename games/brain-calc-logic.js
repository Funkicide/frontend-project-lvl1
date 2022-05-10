import readlineSync from 'readline-sync';

const brainCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  let isCorrect = false;
  let correctAnswerCount = 0;

  do {
    const randomInt1 = Math.round(Math.random() * (20 - 0) + 0);
    const randomInt2 = Math.round(Math.random() * (20 - 0) + 0);
    const getRandomOperator = () => {
      const randomInt = Math.round(Math.random() * (2 - 0) + 0);
      const operators = ['+', '-', '*'];
      return operators[randomInt];
    };
    const randomOperator = getRandomOperator();
    const expression = `${randomInt1} ${randomOperator} ${randomInt2}`;
    console.log(`Question: ${expression}`);
    const userInput = readlineSync.questionInt('Your answer ');
    const isRight = (eval(userInput) === eval(expression));
    if (isRight) {
      console.log('Correct!');
      isCorrect = true;
      correctAnswerCount += 1;
    } else {
      console.log(`${userInput} is wrong answer ;(. Correct answer was ${eval(expression)}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } while (isCorrect && correctAnswerCount < 3);

  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainCalcGame;
