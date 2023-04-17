const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  matrix.forEach((el, i)=>{
    for(let k = 0;k < el.length; k++){
      let index = null
      if (el[k] === 0){
        index = k
        for(let j = i+1;j < matrix.length; j++){
          matrix[j].splice(index, 1, -1)
        }
      }
    }
  })
  const sort  = matrix.flat().filter((el)=>el > 0)
  return sort.reduce((acc, el)=>acc+=el, 0)
}

getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
])
module.exports = {
  getMatrixElementsSum
};
