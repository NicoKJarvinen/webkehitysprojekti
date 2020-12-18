/**
 * Loggeri tapahtumien loggaamiseen.
 * @module logger
 * @category Utils
 */

 /**
  * Console.loggaa parametrit.
  * @param  {...any} params logattavat asiat.
  */

const info = (...params) => {
    if(process.env.NODE_ENV !== 'test') {
    console.log(...params)
    }
  }
  /**
   * Console.errorattaa parametrit.
   * @param  {...any} params logattavat asiat.
   */
  const error = (...params) => {
    if(process.env.NODE_ENV !== 'test') {
    console.error(...params)
    }
  }
  
  module.exports = {
    info, error
  }