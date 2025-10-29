const prompt = require("prompt-sync")();
let n = Number(prompt("Combien de marches ? "));

let façons = [1, 1]; // façons[0] = 1, façons[1] = 1

for (let i = 2; i <= n; i++) {
  façons[i] = façons[i - 1] + façons[i - 2];
}

console.log("Nombre de façons de monter", n, "marches :", façons[n]);
