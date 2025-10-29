const prompt = require("prompt-sync")();
  let vow = ["a","e","y","u","i","o"]
  let str = prompt("entrer un mot ")
  let conteur = 0

for(let i=0;i<str.length;i++){
  if (vow.includes(str[i])){
                      conteur++
                         }

}

console.log("le nombre de voyelle est : " + conteur)