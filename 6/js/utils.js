const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUnicRandomId = (min, max) => {
  const postValues = [];
  return () => {
    let currentValue = getRandomInteger(min, max);
    if (postValues.length >= (max - min + 1)) {
      return null;
    }
    while (postValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    postValues.push(currentValue);
    return currentValue;
  };
};

export {getRandomInteger, getUnicRandomId};
