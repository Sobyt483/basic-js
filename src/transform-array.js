const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  array = [...arr]
  const comands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  array.forEach((el, i)=>{
    if(el === '--discard-next'){
      if(i === array.length - 1){
        array.splice(i, 1)
      }else {
        array.splice(i, 2)
      }
    }
    if(el === '--discard-prev'){
      if(i ===0){
        array.splice(i, 1)
      }else{
        array.splice(i-1, 2)
      }
    }
    if(el === '--double-next'){
      if(!(i === array.length - 1)){
        array[i] = array[i+1]
      }
    }
    if(el === '--double-prev'){
      if(!(i === 0)){
        array[i] = array[i-1]
      }
    }
  })
  const res = array.filter((el)=>!comands.includes(el))
  return res
}

transform([1, 2, 3, '--double-next', 4, 5])
module.exports = {
  transform
};
