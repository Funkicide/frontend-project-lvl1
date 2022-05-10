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

export { getGcd, getRandomInt };
