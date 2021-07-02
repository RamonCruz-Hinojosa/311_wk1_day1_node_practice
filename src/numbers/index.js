const isEven = (num) => {
  // write code for numbers.isEven
  let modded = num % 2 == 0;
  return modded.valueOf();
};

const sum = (arr) => {
  // write code for numbers.sum
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
  }
  return sum1;
};

const comboSum = (arr, sums) => {
  // write code for numbers.comboSum
  if (sum(arr) !== sums) {
    return false;
  }
};

module.exports = {
  isEven,
  sum,
  comboSum,
};
