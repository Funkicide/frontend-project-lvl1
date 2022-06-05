import engine from '../engine.js';
import getRandomInt from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomInteger = getRandomInt();

  const question = String(randomInteger);
  const answer = (isEven(randomInteger) ? 'yes' : 'no');

  return [question, answer];
};

const runBrainEven = () => engine(task, generateRound);

export default runBrainEven;
