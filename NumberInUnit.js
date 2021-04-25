let r1 = require('readline');
let prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("Enter unit format from 1,10,100,1000:", function (unit) {
if(unit==1)
console.log("Unit value..");
if(unit==10)
console.log("Ten");
if(unit==100)
console.log("Hundread");
if(unit==1000)
console.log("Thousand");
else
console.log("Not Unit..");
process.exit();
});
