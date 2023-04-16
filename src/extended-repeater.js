const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.repeatTimes){
    options.repeatTimes = 1
  }
  if (!options.additionRepeatTimes){
    options.additionRepeatTimes = 1
  }
  if (!str){
    str = `${str}`
  }
  const keys = Object.entries(options)
  keys.forEach((el, i)=>{
    if(!el[1]){
      options[el[0]] = `${el[1]}`
    }
  })
  let res = []
  for(let i = 0;i < options.repeatTimes; i++){
    let word = [str]
    if (options.additionRepeatTimes > 0){
      let addition = []
      for (let k = 0; k < options.additionRepeatTimes; k++){
        addition.push(`${options.addition||''}`)
      }
      word.push(addition.join(`${options.additionSeparator||'|'}`))
    }
    res.push(word.join(''))
  }
  return res.join(`${options.separator||'+'}`)
}

module.exports = {
  repeater
};
