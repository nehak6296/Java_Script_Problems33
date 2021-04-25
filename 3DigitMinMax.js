
let max=0;min=999;
for (i = 0; i<5; i++) {
let number = Math.floor(Math.random() * 900) + 100;
console.log("3 Digit Number  := "+number);
 if(number > max) {
     max = number;
 }
 if(number < min) {
     min = number;
 }
}
console.log("Minimum 3 digit number  =  "+min);
console.log("Maximum 3 digit number  =  "+max);
