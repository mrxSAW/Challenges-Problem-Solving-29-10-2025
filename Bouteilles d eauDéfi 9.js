const prompt = require("prompt-sync")();

let pleines = Number(prompt("Combien de bouteilles pleines au départ ? "));
let bues = 0;
let vides = 0;

while (pleines > 0) {
  bues += pleines;
  vides += pleines;
  pleines = 0;

  
  let echangeables = Math.floor(vides / 3);
  pleines = echangeables;
  vides = vides % 3; // Reste de bouteilles vides non échangeables
}

console.log("Tu peux boire au total :", bues, "bouteilles.");
