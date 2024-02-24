const score = 400
// console.log(score);

const balance = new Number(100) //if you want to explicitly specify the type //also see this in browser console. balance var will have access to Number prototype
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); //generate natural random number
//added one to avoid this case: lets say math.random generates 0.0956. 0.0956*10 = 0.956 = math.floor(0.956) = 0. that's why 1 is added

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //generate random number in range min-max
/* the plus one is  added to include the maximum number(20) into the range .Zero case is already handled by adding +min after it ...
For example  let's say the random returns 0.99999 then multiply it with 11(20-10+1)..  
, we will get 10.989.... 
take the floor value of this which will be 10 and now add it with min value which is 10 so overall 
answer would be 20(the ending range). That's the maximum case..  
Similarly if random returns 0.0122... 
then everything will get 0 in the left and then adding min(10) to 0 will give us 10 which is the starting range..
*/

