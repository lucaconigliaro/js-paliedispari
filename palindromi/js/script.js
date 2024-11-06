//Chiediamo all'utente una parola
userWord = prompt("Dimmi una parola")

//Funzione
let result = isPalindrome(userWord);
console.log(result);

if(result === true) {
    console.log("Palindroma")
} else {
    console.log("Non Palindroma")
}