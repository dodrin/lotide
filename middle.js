//The function takes an array as parameter
//It will return the middle(s) element
const middle = (arr) => {
  const result = [];
  let mid;
  
  if (arr.length < 3) {
    return [];
  }

  if (arr.length % 2 === 0) {
    mid = arr.length / 2;
    result.push(arr[mid - 1]);
    result.push(arr[mid]);
    return result;
  } else {
    mid = Math.round(arr.length / 2);
    result.push(arr[mid - 1]);
    return result;
  }
};

module.exports = middle;