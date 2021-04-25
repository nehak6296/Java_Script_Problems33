let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter year:-",function(year) {
   let y = year%4;
   let r = year%100;
   let t = year%400;
   if((y == 0 && r != 0) || t==0)
   console.log("It's a Leap year...")
   else
   console.log("It's not a Leap year...") 
    process.exit();
});
