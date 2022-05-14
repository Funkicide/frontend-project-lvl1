const getRandomInt = () => Math.round(Math.random() * (20 - 0) + 0);

const getRandomOperator = () => {
  const randomInt = Math.round(Math.random() * (2 - 0) + 0);
  const operators = ['+', '-', '*'];
  return operators[randomInt];
};

export {
  getRandomInt, getRandomOperator,
};
