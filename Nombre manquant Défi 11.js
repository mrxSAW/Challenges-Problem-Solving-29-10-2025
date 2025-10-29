const prompt = require("prompt-sync")();

let tab = [1,2,3,5,7,10]
let max = Math.max(...tab);

for(let i=1 ;i<max;i++){
            if(!tab.includes(i)){
                console.log(`le nombtre monquant est ${i}`)
            }

}