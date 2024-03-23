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