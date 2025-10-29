const prompt = require("prompt-sync")();

let tab = [1,2,3,4]
  
let tabinverser = [...tab].reverse()
let result = tab.concat(tabinverser)


console.log(tab)
console.log(tabinverser)
console.log(result)

