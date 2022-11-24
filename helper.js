/**
 * Powmod
 *
 * @param num
 * @param exp
 * @param mod
 * @returns {bigint}
 */
const powMod = (num, exp, mod) => {
    return BigInt(num) ** BigInt(exp) % BigInt(mod);
};

/**
 * Random number
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min + 1;
};

const randomBigInt = (length = 448) => {
    let num = '';
    for (let i = 0; i < Math.round(length / 14); i++) {
      num += randomNumber(10000000000000, 100000000000000);
    }
    return BigInt(num);
};

const isHasValue = (variable) => {
    return Boolean(variable);
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
 const randomInterger = (min = 10, max = 500) => {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
};
  
module.exports = {
    randomNumber,
    randomBigInt,
    powMod,
    isHasValue,
    randomInterger
}