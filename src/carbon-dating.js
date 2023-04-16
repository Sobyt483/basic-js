const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(act) {
  if(!(typeof +act ==='number' && typeof act ==='string'&&+act>=1&&+act<=MODERN_ACTIVITY)){
    return false
  }
  const mathLog2 = 0.693
  const result = Math.ceil(Math.log(MODERN_ACTIVITY/act)/(mathLog2/HALF_LIFE_PERIOD))
  return result
}
dateSample(3)
module.exports = {
  dateSample
};
