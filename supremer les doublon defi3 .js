const prompt = require("prompt-sync")();

tab = [1,2,2,2,3,3,3]

function suprimerDoublons(tableau){

  let newTab = [...new Set(tableau)]
  return newTab

}

console.log(suprimerDoublons(tab))