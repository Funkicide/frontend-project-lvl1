import getRandomInt from '../math.js';

const brainCalcTask = 'What is the result of the expression?';

const generateBrainCalc = () => {
  const firstInt = getRandomInt();
  const secondInt = getRandomInt();
  const indexOfExpression = getRandomInt(2);

  const gameQuestions = [`${firstInt} + ${secondInt}`, `${firstInt} - ${secondInt}`, `${firstInt} * ${secondInt}`];
  const rightAnswers = [firstInt + secondInt, firstInt - secondInt, firstInt * secondInt];
  const gameQuestion = gameQuestions[indexOfExpression];
  const rightAnswer = rightAnswers[indexOfExpression];

  const result = [gameQuestion, `${rightAnswer}`];

  return result;
};

export { brainCalcTask, generateBrainCalc };
