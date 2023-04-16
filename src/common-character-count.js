const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Array = s1.split('')
  const length = s1Array.length
  const s2Array = s2.split('')
  for (let i = 0; i < s1Array.length;){
    const tempLenght = s1Array.length
    s2Array.forEach((char, k)=>{
      if(s1Array[i] === char){
        s1Array.splice(i, 1)
        s2Array.splice(k, 1)
      }
    })
    if (tempLenght === s1Array.length){
      i++
    }
  }
  return length - s1Array.length
}

module.exports = {
  getCommonCharacterCount
};
