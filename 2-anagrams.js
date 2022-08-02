// SOLUTION 1: Big(O) = O(n)
// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const mappingOfStr1 = {};
//   const mappingOfStr2 = {};

//   for (let i = 0; i < str1.length; i++) {
//     mappingOfStr1[str1[i]] = (mappingOfStr1[str1[i]] || 0) + 1;
//   }
//   for (let key of str2) {
//     mappingOfStr2[key] = (mappingOfStr2[key] || 0) + 1;
//   }
//   for (let key in mappingOfStr1) {
//     if (!(key in mappingOfStr2)) {
//       return false;
//     }
//     if (mappingOfStr1[key] !== mappingOfStr2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// SOLUTION 2: Big(O) = O(n)
// With Different Implementation
// Instead of creating 2 loops for mapping and 1 loop for searching or matching criteria map one string and look up each character and reduce it's count based on the occurence from other string.
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};
  for (let key of str1) {
    lookup[key] = (lookup[key] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!lookup[str2[i]]) {
      return false;
    } else {
      lookup[str2[i]] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("shahzaib", "baizaahh"));
