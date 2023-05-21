const middle = (arr) => {
  let result = [];
  let mid;

  if (arr.length < 3) {
    return result;
  }

  if (arr.length % 2 === 0) {
    mid = arr.length / 2;
    result.push(arr[mid - 1]);
    result.push(arr[mid]);
    return result;
  } else {
    mid = Math.round(arr.length / 2);
    result.push(arr[mid]);
    return result;
  }
};