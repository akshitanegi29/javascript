/*
immediately invoked func expression
An Immediately Invoked Function Expression is a function expression that is defined and executed immediately after its creation.
()();
Avoiding Global Scope Pollution:
One of the common issues in JavaScript development is global scope pollution, where variables declared in one part of the code can unintentionally affect other parts. IIFE helps mitigate this problem by keeping variables and functions within their own scope, preventing global pollution.
var name = 'a';
(function(){
    var name = 'b';
    log('inner'+name)
})();
log('outer'+name)
In this case, the global variable name remains unaffected by the local variable name declared inside the IIFE. This separation of scope helps maintain a clean global namespace.
*/

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// https://medium.com/@divyanshu013/to-semicolon-or-not-89c3dc73edf7

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')