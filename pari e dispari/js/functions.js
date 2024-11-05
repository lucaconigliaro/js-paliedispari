/**
 * Generiamo un numero random da 1 a 5 per il computer
 * @param {number} number
 * @param {number} number
 * @returns {number}
 */
function newCpuNum(min, max) {
    const randomNum = Math.floor(Math.random() *(max - min) + min);
    return randomNum
}