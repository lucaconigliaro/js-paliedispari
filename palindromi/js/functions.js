//Funzione 
/**
 * Creare una funzione per capire se la parola inserita è palindroma
 * @param {string} userWord
 * @returns {boolean} 
 */
function isPalindrome(userWord){
    let result = "";
    for (let i = userWord.length - 1; i >= 0; i--) {
     const curWord = userWord [i];
     result += curWord;  
    }
     return result === userWord;
}
