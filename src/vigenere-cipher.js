const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(boolean=true){
    this.boolean = boolean
    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.table = this.makeTable()
  }
  encrypt(str, key) {
    if (!str || !key){
      throw new Error("Incorrect arguments!");
    }
    str = str.toUpperCase()
    key = key.toUpperCase()
    let result = []
    const strArray = str.split(' ')
    const keyArray = key.split('')
    const lettersArray = this.letters.split('')
    let index = 0
    strArray.forEach((word, i)=>{
      word = word.split('')
      word.forEach((el, i)=>{
        if(index > keyArray.length - 1){
          index = 0
        }
        if (!lettersArray.includes(el)){
          result.push(el)
        }else {
          const char = this.table[lettersArray.indexOf(el)][lettersArray.indexOf(keyArray[index])]
          result.push(char)
          index++
        }
      })
      result.push(' ')
    })
    if(!this.boolean){
      return result.reverse().join('').trim()
    }else {
      return result.join('').trim()
    }
  }
  decrypt(str, key) {
    if (!str || !key){
      throw new Error("Incorrect arguments!");
    }
    str = str.toUpperCase()
    key = key.toUpperCase()
    let result = []
    const strArray = str.split(' ')
    const keyArray = key.split('')
    const lettersArray = this.letters.split('')
    let index = 0
    strArray.forEach((word, i)=>{
      word = word.split('')
      word.forEach((el, i)=>{
        if(index > keyArray.length - 1){
          index = 0
        }
        if (!lettersArray.includes(el)){
          result.push(el)
        }else {
          const char = lettersArray[this.table[lettersArray.indexOf(keyArray[index])].indexOf(el)]
          result.push(char)
          index++
        }
      })
      result.push(' ')
    })
    if(!this.boolean){
      return result.reverse().join('').trim()
    }else {
      return result.join('').trim()
    }
  }
  makeTable(){
    const array = []
    const lettersArray = this.letters.split('')
    for(let i = 0; i < lettersArray.length; i++){
      const row = []
      let k = i
      for(let j = 0; j < lettersArray.length; j++){
        if (k > lettersArray.length-1){
          k = 0
        }
        row.push(lettersArray[k])
        k++
      }
      array.push(row)
    }
    return array
  }
}

module.exports = {
  VigenereCipheringMachine
};
