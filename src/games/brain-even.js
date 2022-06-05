import engine from '../engine.js';
import getRandomInt from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (int) => int % 2 === 0;

const generateRound = () => {
  const int = getRandomInt();

  const question = String(int);
  const answer = (isEven(int) ? 'yes' : 'no');

  return [question, answer];
};

const runBrainEven = () => engine(task, generateRound);

export default runBrainEven;
