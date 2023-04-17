const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number'||position % 1||position > this.array.length||position<1){
      this.array = []
      throw Error(`You can't remove incorrect link!`)
    }
    this.array.splice(position-1,1)
    return this
  },
  reverseChain() {
    this.array.reverse()
    return this
  },
  finishChain() {
    const res = this.array.join('~~')
    this.array = []
    return res
  }
};

console.log(chainMaker.addLink(1).addLink(2).finishChain())
module.exports = {
  chainMaker
};
