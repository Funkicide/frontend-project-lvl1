import getRandomInt from '../math.js';

const brainProgressionTask = 'What number is missing in the progression?';

const generateBrainProgression = () => {
  const progressionStart = getRandomInt();
  const progressionStep = getRandomInt(1, 10);
  const indexOfHiddenStep = getRandomInt(0, 9);
  const progression = [];

  for (let i = progressionStart; progression.length < 10; i += progressionStep) {
    progression.push(i);
  }

  const rightAnswer = `${progression[indexOfHiddenStep]}`;
  progression[indexOfHiddenStep] = '..';
  const gameQuestion = `${progression.join(' ')}`;
  const result = [gameQuestion, rightAnswer];

  return result;
};

export { brainProgressionTask, generateBrainProgression };
