let score = true
let scoreInNum = Number(score)
// console.table([typeof scoreInNum,scoreInNum]);
// console.log(typeof NaN);

/*
33' => 33
'33abc' => NaN
null => 0
undefined => NaN
true => 1, false=> 0
*/ 

let isLoggedIn = 160
let isLoggedInBoolean = Boolean(isLoggedIn)
// console.table([typeof isLoggedInBoolean,isLoggedInBoolean]);

/*
'Akshita' => true
'' => false
null => false
undfined => false
nan => false
12 => true
-12 => false
0 => false
*/

let someNonNumber = NaN;
let stringNonNumber = String(someNonNumber)
//console.table([typeof stringNonNumber,stringNonNumber]);
/*
anything u enter, o/p will be enclosed in quotes. even null, undefined,true,NaN
*/