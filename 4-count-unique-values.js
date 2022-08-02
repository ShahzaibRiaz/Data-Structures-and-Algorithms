// SOLUTION 1: Big(O) = O(n)
// Details problem solved with frequency counter pattern.
// function countUniqueValues(integersArray) {
//   const mapIntegerValueasKeys = {};

//   for (let key of integersArray) {
//     // If key doesn't exists on the object then create one and update the occurence.
//     mapIntegerValueasKeys[key] = (mapIntegerValueasKeys[key] || 0) + 1;
//   }
//   return Object.keys(mapIntegerValueasKeys).map((key) => Number(key));
//      OR return length of keys
//   return Object.keys(mapIntegerValueasKeys).length;
// }

/** SOLUTION 2: Big(O) = O(n)
 * Details: Problem solved with multiple pointer pattern and modify the underlying array or make a copy of it, to get rid of mutation or reference.
 */
function countUniqueValues(integersArray) {
  if (integersArray.length === 0) {
    return;
  }
  if (integersArray.length === 1) {
    return integersArray;
  }
  let leftPointer = 0;
  for (let i = 1; i < integersArray.length; i++) {
    if (integersArray[leftPointer] !== integersArray[i]) {
      leftPointer++;
      integersArray[leftPointer] = integersArray[i];
    }
  }
  return leftPointer + 1;
}
// Array must be sorted.
console.log(countUniqueValues([-5]));
