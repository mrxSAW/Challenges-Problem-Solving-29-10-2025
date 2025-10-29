const prompt = require("prompt-sync")();
let N = +prompt("enter un nombre ")

for(let i=1;i<=N;i++){
if ((i%5==0) && (i%3==0) ) {
            console.log("TechLead ")
            }
else if (i%3==0) {
            console.log("Tech")
            }
else if (i%5==0) {
            console.log("Lead ")
            }
else {
            console.log(i)
          }
}