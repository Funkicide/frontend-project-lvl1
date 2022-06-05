import engine from '../engine.js';
import getRandomInt from '../utils.js';

const task = 'What number is missing in the progression?';

const generateProgression = (start, step, maxLength = 10) => {
  const progression = [];

  for (let i = start; progression.length < maxLength; i += step) {
    progression.push(i);
  }

  return progression;
};

const generateRound = () => {
  const start = getRandomInt();
  const step = getRandomInt(1, 10);
  const hiddenIndex = getRandomInt(0, 9);

  const progression = generateProgression(start, step);

  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runBrainProgression = () => engine(task, generateRound);

export default runBrainProgression;
