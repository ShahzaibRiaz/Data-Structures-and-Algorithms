// Write a function called "same", which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value "squared" in the second array.
// The frequency of the values must be the same
// [1,3,4], [1,9,4] === true
// [1,3] , [1,4] === false
// [1,2,3] = [4,9,1] === true

// SOLUTION:1 Big(O) = O(n^2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let count = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] * arr1[i] === arr2[j]) {
//         count++;
//         break;
//       }
//     }
//   }
//   return arr1.length === count ? true : false;
// }

// SOLUTION: 2 Big(O) = O(n^2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     const index = arr2.indexOf(arr1[i] ** 2);
//     if (index === -1) {
//       return false;
//     }
//     arr2.splice(index, 1);
//   }
//   return true;
// }

// SOLUTION: 3 Big(O) = O(n)
// Detail: we're mapping each key into object for both arrays and searching the keys and their count of occurences.
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    if (frequencyCounter1[arr1[i]]) {
      frequencyCounter1[arr1[i]]++;
    } else {
      frequencyCounter1[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (frequencyCounter2[arr2[i]]) {
      frequencyCounter2[arr2[i]]++;
    } else {
      frequencyCounter2[arr2[i]] = 1;
    }
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [1, 4, 2]));
