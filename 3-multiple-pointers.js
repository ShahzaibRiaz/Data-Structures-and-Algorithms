/** Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist*/

// SOLUTION 1: Big(O) = O(n)
// function sumZero(sortedArray) {
//   let rightPointer = sortedArray.length - 1;

//   for (let i = 0; i < sortedArray.length; i++) {
//     if (rightPointer === i) {
//       return;
//     }
//     const sum = sortedArray[i] + sortedArray[rightPointer];
//     if (sum === 0) {
//       return [sortedArray[i], sortedArray[rightPointer]];
//     }
//     if (sum > 0) {
//       rightPointer--;
//     }
//   }
//   return;
// }

// SOLUTION 2: Big(O) = O(n)
// Details: Different implementation using while loop.
function sumZero(sortedArray) {
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;
  while (leftPointer < rightPointer) {
    const sum = sortedArray[leftPointer] + sortedArray[rightPointer];
    if (sum === 0) {
      return [sortedArray[leftPointer], sortedArray[rightPointer]];
    }
    if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}
console.log(sumZero([-1, 1, 2, 3]));
