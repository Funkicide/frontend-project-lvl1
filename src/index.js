import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
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
