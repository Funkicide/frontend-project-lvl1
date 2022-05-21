import getRandomInt from '../math.js';

const brainProgressionTask = 'What number is missing in the progression?';

const getRandomStep = () => {
  const randomInt = getRandomInt(2);
  switch (randomInt) {
    case 0:
      return 1;
    case 1:
      return 3;
    default:
      return 5;
  }
};

const generateBrainProgression = () => {
  const progressionStart = getRandomInt();
  const progressionStep = getRandomStep();
  const indexOfHiddenStep = getRandomInt(9);
  const progression = [];

  for (let i = progressionStart; progression.length < 10; i += progressionStep) {
    progression.push(i);
  }

  const rightAnswer = progression[indexOfHiddenStep];
  progression[indexOfHiddenStep] = '..';
  const gameQuestion = `${progression.join(' ')}`;
  const result = [gameQuestion, `${rightAnswer}`];

  return result;
};

export { brainProgressionTask, generateBrainProgression };
