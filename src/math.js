const getRandomInt = (base = 20) => Math.round(Math.random() * base);

const getRandomOperator = () => {
  const randomInt = Math.round(Math.random() * (2 - 0) + 0);
  const operators = ['+', '-', '*'];
  return operators[randomInt];
};

export {
  getRandomInt, getRandomOperator,
};
