import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getGcd = (a, b) => {
  if (a === 0) {
    return b;
  }

  while (b !== 0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};

const getRandomInt = () => Math.round(Math.random() * (20 - 0) + 0);

const getRandomOperator = () => {
  const randomInt = Math.round(Math.random() * (2 - 0) + 0);
  const operators = ['+', '-', '*'];
  return operators[randomInt];
};

export {
  getGcd, getRandomInt, getUserName, getRandomOperator,
};
export default greetUser;
