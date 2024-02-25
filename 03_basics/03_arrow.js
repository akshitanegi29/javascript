// this in object and functions & arrow function
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //returns {} in node and returns window object in brower

// function chai(){
//     let username = "hitesh"
//     console.log(this);
//     console.log(this.username);
// }

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this); //in arrow function this returns empty instead of global obj
// }


//chai()
//Read: https://stackoverflow.com/questions/34838659/the-this-keyword-behaves-differently-in-nodejs-and-browser
// img: https://i.stack.imgur.com/rgsaw.jpg
// 
//*****************Arrow Function ************************* */

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//While using braces, you must use an explicit return statement.
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )
// in parenthesis, you can skip return statement

const addTwo = (num1, num2) => ({username: "hitesh"}) //enclosing object in parenthesis to skip explicitly writing of 'return'


console.log(addTwo(3, 4))
