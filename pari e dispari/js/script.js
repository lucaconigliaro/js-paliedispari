//Prompt utente
let evenOdd = prompt("Scegli: Pari o Dispari?");
let userNum = parseInt(prompt("Adesso scegli un numero da 1 a 5"));

console.log(`Hai scelto ${evenOdd}`);
console.log(`Il numero che hai scelto è ${userNum}`)

//Funzione numero random generato
let cpuNum = getRandomInt (1, 5);
console.log(`Il computer ha scelto il numero ${cpuNum}`)

//Dichiariamo chi ha vinto 
let evenAndOdd = sumItem (userNum + cpuNum);
console.log(`Il risultato della somma è ${evenAndOdd}`)

if(evenAndOdd === evenOdd) {
    console.log("Hai Vinto");
} else {
    console.log("Hai Perso")
}

