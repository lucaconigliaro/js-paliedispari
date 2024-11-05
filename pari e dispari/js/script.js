//Prompt utente
let evenOdd = prompt("Scegli: Pari o Dispari?");
let userNum = prompt("Adesso scegli un numero da 1 a 5");

console.log(`Hai scelto ${evenOdd}`);
console.log(`Il numero che hai scelto è ${userNum}`)

//Funzione numero random generato
let cpuNum = newCpuNum (1, 5);
console.log(`Il computer ha scelto il numero ${cpuNum}`)