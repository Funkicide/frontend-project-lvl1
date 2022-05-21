import getRandomInt from '../math.js';

const brainEvenTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (int) => int % 2 === 0;

const generateBrainEven = () => {
  const int = getRandomInt();

  const gameQuestion = `${int}`;
  const rightAnswer = (isEven(int) ? 'yes' : 'no');

  const result = [gameQuestion, rightAnswer];

  return result;
};

export { brainEvenTask, generateBrainEven };
