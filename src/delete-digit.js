const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = n.toString().split('')
  const min = Math.min(...array)
  const max = Math.max(...array)
  if (max == array[0]||max==array[array.length-1]){
    array.splice((array.indexOf(min.toString())), 1)
    return +array.join('')
  }else{
    array.splice(0, 1)
    return +array.join('')
  }
}

deleteDigit(1001)
module.exports = {
  deleteDigit
};
