const prompt = require("prompt-sync")();

let mot1 = prompt("Entrez un mot :"); 
let mot2 = mot1.split("").reverse().join(""); 

console.log("Mot original :", mot1);
console.log("Mot inversé  :", mot2);

if (mot1 === mot2) {
  console.log("true (c'est un palindrome)");
} else {
  console.log("false (ce n'est pas un palindrome)");
}
