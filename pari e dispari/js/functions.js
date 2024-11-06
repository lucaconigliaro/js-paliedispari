/**
 * Generiamo un numero random da 1 a 5 per il computer
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() *(max - min) + min);
}

/**
 * Sommiamo i due numeri e stabiliamo se la somma dei due numeri è pari o dispari
 * @param {number} number1
 * @param {number} number2
 * @returns {number} sum
 */
function sumItem(number1, number2) {
    let sum = userNum + cpuNum;
    if (sum % 2 === 0) {
        sum = "Pari";
    } else {
        sum = "Dispari";
    }
    return sum;
}