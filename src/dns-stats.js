const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(dom) {
  const array = []
  const object = {}
  dom.forEach((el, i) => {
    array.push(el.split('.').reverse())
  })
  array.forEach((el)=>{
    for (let i = 0; i < el.length; i++) {
      const domain = `.${el.slice(0, i + 1).join('.')}`
      if (object[domain]){
        object[domain] += 1
      }else{
        object[domain] = 1
      }
    }
  })
  return object
}

module.exports = {
  getDNSStats
};
