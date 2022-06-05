import engine from '../engine.js';
import getRandomInt from '../utils.js';

const brainEvenTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (int) => int % 2 === 0;

const generateBrainEven = () => {
  const int = getRandomInt();

  const gameQuestion = `${int}`;
  const rightAnswer = (isEven(int) ? 'yes' : 'no');

  return [gameQuestion, rightAnswer];
};

const runBrainEven = () => engine(brainEvenTask, generateBrainEven);

export default runBrainEven;
