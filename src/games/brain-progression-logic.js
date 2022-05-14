import { getRandomInt, getRandomOperator } from '../math.js';

const gameTask = 'What number is missing in the progression?';

const runGameProgression = () => {
  const randomInt = getRandomInt();
  const randomOperator = getRandomOperator();

  const getRandomStep = (operator) => {
    switch (operator) {
      case '+':
        return 1;
      case '-':
        return 3;
      default:
        return 5;
    }
  };

  const randomStep = getRandomStep(randomOperator);
  const randomIndex = Math.round(Math.random() * (9 - 0) + 0);

  const getRandomProgression = () => {
    const result = [];
    for (let i = randomInt; result.length < 10; i += randomStep) {
      result.push(i);
    }
    return result;
  };

  const randomProgression = getRandomProgression();

  const hideRandomElement = () => {
    const coll = [];
    for (let i = 0; i < randomProgression.length; i += 1) {
      if (i === randomIndex) {
        coll.push('..');
      } else {
        coll.push(randomProgression[i]);
      }
    }

    return coll.join(' ');
  };

  const progressionWithHiddenElement = hideRandomElement(randomProgression);
  const gameQuestion = `${progressionWithHiddenElement}`;
  const rightAnswer = randomProgression[randomIndex];

  const result = [gameQuestion, `${rightAnswer}`];

  return result;
};

export { gameTask, runGameProgression };
