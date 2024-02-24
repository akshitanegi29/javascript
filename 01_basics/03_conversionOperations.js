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


//operations
let value = 3;
let negvalue = -value;
//console.log(negvalue);

let str1 = "hello"
let str2 = " akshita"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);  string + anything = concat
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

/* Number + Number -> addition
1 + 2; // 3

Boolean + Number -> addition
true + 1; // 2

Boolean + Boolean -> addition
false + false; // 0 */



/* 
BigInt + BigInt -> addition
1n + 2n; // 3n

BigInt + Number -> throws TypeError
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

To add a BigInt to a non-BigInt, convert either operand
1n + BigInt(2); // 3n
Number(1n) + 2; // 3 
*/



/*
String + String -> concatenation
"foo" + "bar"; // "foobar"

Number + String -> concatenation
5 + "foo"; // "5foo"

String + Boolean -> concatenation
"foo" + false; // "foofalse"

String + Number -> concatenation
"2" + 2; // "22"
*/



//prefix postfix
/*
postfix increment
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
*/


/*
prefix increment
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
*/