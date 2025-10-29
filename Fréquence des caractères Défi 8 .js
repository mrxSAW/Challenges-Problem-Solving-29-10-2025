const prompt = require("prompt-sync")();

let tableau = prompt("entrer un mot : ")
let compteur = {};

for (let i = 0; i < tableau.length; i++) {
  let el = tableau[i];
  if (compteur[el]) {
    compteur[el]++;
  } else {
    compteur[el] = 1;
  }
}
console.log(compteur)