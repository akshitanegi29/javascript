//let var and const
//let -> block scoped & not hoisted; var-> function scoped and hoisted  
// https://www.geeksforgeeks.org/difference-between-var-and-let-in-javascript/
var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c =30;
    var d = 70;
    console.log("INNER: ", a);
}
console.log("outer c: ", c);
console.log("outer a: ", a);
// console.log(b);
// console.log(d);


//---------------------------------------------------------------
//global and local scope

function one(){
    const username = "hitesh"
    function two(){
        var website = "youtube"
        //const website = "youtube"

        console.log(username);
    }
    console.log(website);
     two()
}

one()


// ++++++++++++++++++ interesting ++++++++++++++++++


addone(5)
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}