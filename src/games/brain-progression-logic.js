import getRandomInt from '../math.js';

const gameTask = 'What number is missing in the progression?';

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

const getRandomProgression = () => {
  const randomInt = getRandomInt();
  const progressionStep = getRandomStep();
  const hiddenIndex = getRandomInt(9);
  const progression = [];

  for (let i = randomInt; progression.length < 10; i += progressionStep) {
    progression.push(i);
  }

  const rightAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const progressionWithHiddenElement = progression.join(' ');
  const result = [rightAnswer, progressionWithHiddenElement];

  return result;
};

const runBrainProgression = () => {
  const [rightAnswer, progressionWithHiddenElement] = getRandomProgression();
  const gameQuestion = `${progressionWithHiddenElement}`;
  const result = [gameQuestion, `${rightAnswer}`];

  return result;
};

export { gameTask, runBrainProgression };
