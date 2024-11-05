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

/**
 * Sommiamo i due numeri e stabiliamo se la somma dei due numeri è pari o dispari
 * @param {number} number1
 * @param {number} number2
 * @returns {number} sum
 */
function sumItem(number1, numb) {
    let sum = userNum + cpuNum;
    if (sum % 2 === 0) {
        sum = "Pari";
    } else {
        sum = "Dispari";
    }
    return sum;
}