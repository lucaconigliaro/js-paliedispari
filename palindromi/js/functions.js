//Funzione 
/**
 * Creare una funzione per capire se la parola inserita è palindroma
 * @param {string} word
 * @returns {boolean} 
 */
function isPalindrome(word){
    let result = "";
    for (let i = word.length - 1; i >= 0; i--) {
     const curWord = word [i];
     result += curWord;  
    }
     return result === word;
}
