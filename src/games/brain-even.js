import getRandomInt from '../math.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (int) => int % 2 === 0;

const runBrainEven = () => {
  const randomInt = getRandomInt();

  const gameQuestion = `${randomInt}`;
  const rightAnswer = (isEven(randomInt) ? 'yes' : 'no');

  const result = [gameQuestion, rightAnswer];

  return result;
};

export { gameTask, runBrainEven };
