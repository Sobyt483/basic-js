const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let check = 0
  function gavno(n){
  if(n <= 9){
    check = n
  }
  const num = n.toString().split('')
  if(num.length !== 1){
    const res = num.reduce((acc, el)=>acc+= +el, 0)
    gavno(res)
  }
  }
  gavno(n)
  return check
}
module.exports = {
  getSumOfDigits
};
