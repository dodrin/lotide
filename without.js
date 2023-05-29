//FUNCTION IMPLEMENTATION
//parameter source is an array
const without = (sourse, itemsToRemove) => {
  let resultToBE = sourse;
  //copy the source array and set to resultToBe, remove the item
  for (let i = 0; i < sourse.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourse[i] === itemsToRemove[j]) {
        resultToBE.splice(i, 1);
      }
    }
  }  return resultToBE;
};


//TEST CASES
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([2, 5, 6], []));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));