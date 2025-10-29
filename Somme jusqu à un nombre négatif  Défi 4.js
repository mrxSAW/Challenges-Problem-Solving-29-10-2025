const prompt = require("prompt-sync")();

let tab = [1,3,4,3,6,-1,4]
let somme=0
for(let i=0 ;i<tab.length;i++){
     if (tab[i]>0){
      somme = somme+tab[i]
            }
    else {
           break
         }
}

console.log("la somme est " + somme)



