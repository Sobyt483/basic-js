const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const array = email.split('')
  let k = 0
  array.forEach((el, i)=>{
    if(el === '@'){
      k = i
    }
  })
  const res = array.slice(k+1, array.length)
  return res.join('')
}

module.exports = {
  getEmailDomain
};
