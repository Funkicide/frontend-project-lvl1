import engine from '../engine.js';
import getRandomInt from '../math.js';

const brainProgressionTask = 'What number is missing in the progression?';

const generateProgression = (start, step, maxLength = 10) => {
  const progression = [];

  for (let i = start; progression.length < maxLength; i += step) {
    progression.push(i);
  }

  return progression;
};

const generateBrainProgression = () => {
  const start = getRandomInt();
  const step = getRandomInt(1, 10);
  const hiddenIndex = getRandomInt(0, 9);

  const progression = generateProgression(start, step);

  const rightAnswer = `${progression[hiddenIndex]}`;
  progression[hiddenIndex] = '..';
  const gameQuestion = progression.join(' ');

  return [gameQuestion, rightAnswer];
};

const runBrainProgression = () => engine(brainProgressionTask, generateBrainProgression);

export default runBrainProgression;
