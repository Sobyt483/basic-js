const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('')
  let letter = ''
  let count = 0
  const resArray = []
  array.forEach((el, i) =>{
    if(letter === el){
      count++
    }else {
      letter = el
      count = 1
    }
    if (array[i+1] !==el){
      resArray.push([count, letter])
    }
  })
  const res = resArray.flat().filter((el)=>el!=1)
  return res.join('')
}

module.exports = {
  encodeLine
};
