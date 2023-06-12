//takes in an array(inputArr) as a parameter, the array's elements includes neseted array
//Returns a flattend/unnested version of the inputArr
//It can only handle one level of nesting

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