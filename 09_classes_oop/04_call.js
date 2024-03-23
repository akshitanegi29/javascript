function setUsername(username){
this.username = username;
console.log('called');
console.log(this); //without call menthod here 'this' is global object + username but with call this is createUser context
}
function createUser(username, email, age){
    //setUsername(username)
    setUsername.call(this,username)
   
    this.email = email
    this.age = age
}
const user1 = new createUser('akshita', 'an@gmail.com', '25');
console.log(user1)

//------- example 2 ------
let name1 = {
    firstname: "Akshita",
    lastName: "negi"
}
let print = function(hometown, state){
    console.log(this.firstname+" "+this.lastName+" lives in "+hometown + ", "+state)
}

print.call(name1, "Pauri", "UK") //first arg is the reference of obj you want to point to
//function borrowing

print.apply(name1,["Pauri", "UK"]) //works exactly same as call but second arg is array list of params


