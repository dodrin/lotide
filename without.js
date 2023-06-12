//parameter 'source' is an array, 'itemsToRemove' is the items going to be removed from 'array'
const without = (sourse, itemsToRemove) => {
  //copy the source array and set to resultToBe
  let resultToBE = sourse;
  //iterate through arrays and if the source element and itemsToRemove element is the same remove from resultToBe array
  for (let i = 0; i < sourse.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourse[i] === itemsToRemove[j]) {
        resultToBE.splice(i, 1);
      }
    }
  }  return resultToBE;
};

module.exports = without;