/* 2 ways of creating objects:
Object.create (Singleton)

object literals
*/
const mySym = Symbol() //create symbol as key and add in obj

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) //way to access symbol => using square bracket
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //object is froze now
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting)
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());