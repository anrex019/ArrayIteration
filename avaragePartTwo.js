const numbers = [5, 3, 13, 48, 7, 0];



let negativeSum = 0, negativeCount = 0;
let positiveSum = 0, positiveCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    negativeSum += numbers[i];
    negativeCount++;
  } else if (numbers[i] > 0) {
    positiveSum += numbers[i];
    positiveCount++;
  } else {
    zeroCount++;
  }
}

const negativeAvg = negativeCount > 0 ? negativeSum / negativeCount : 0;
const positiveAvg = positiveCount > 0 ? positiveSum / positiveCount : 0;

const stats = [negativeAvg, positiveAvg, zeroCount];

console.log(stats);