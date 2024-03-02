// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const ar of arr) {
    //console.log(ar);
}
const greetings = "Hello world!"
for(const greet of greetings){
    //console.log(greet);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//console.log(map);
for (const [key,val] of map) {
    //console.log(`${key}:${val}`)
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
/*
DIFF B/W for of and for in
for (..of) loop:-
This for (..of) statement lets you loop over the data structures that are iterable such as Arrays, Strings, Maps, Node Lists, and more. 

for (..in) loop:-
The JavaScript for (..in) statement loops through the enumerable properties of an object.
*/


//for in
const myObjects = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObjects) {
    //console.log(`${key}:${myObjects[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"]
for(prog in programming){
    console.log(`${prog}:${programming[prog]}`);
}
//https://linuxhint.com/enumerable-properties-in-javascript/
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

//foreach
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )