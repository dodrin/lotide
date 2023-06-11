const flatten = (inputArr) => {
  const result = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (!(Array.isArray(inputArr[i]))) {
      result.push(inputArr[i]);
    } else {
      for (let j = 0; j < inputArr[i].length; j++) {
        result.push(inputArr[i][j]);
      }
    }
  } return result;
}

module.exports = flatten;