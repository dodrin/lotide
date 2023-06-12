//parameter is an array, leaves tail (after index 0)
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;