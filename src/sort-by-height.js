const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = new Array
  array.length = arr.length
  arr.forEach((el, i)=>{
    if(el === -1){
      array[i] = el
    }else {
      array[i] = 0
    }
  })
  const filter = arr.filter((el)=>el !== -1)
  const sort = filter.sort((a, b)=> a - b)
  array.forEach((el, i)=>{
    console.log(el)
    if(el !== -1){
      array[i] = sort.splice(0, 1)[0]
    }
  })
  return array
}
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
module.exports = {
  sortByHeight
};
