// const tinderUser = new Object() //- singleton
// console.log(tinderUser);

const tinderUser = {} //not a singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//Merge objects: using Object.assign & spread operator
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {4: "e", 5: "f"}

// const obj3 = { obj1, obj2 }

/*
Object.assign(target, source1, source2, …, sourceN) result is stored or modified in target object that's why it is suggested to set target as {} so that original objects are not modified
*/

//const obj3 = Object.assign(obj1, obj2, obj4)
const obj3 = Object.assign({}, obj1, obj2, obj4)

//const obj3 = {...obj1, ...obj2, ...obj4}

//console.log(obj1);
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //returns array
// console.log(Object.values(tinderUser)); //returns array
// console.log(Object.entries(tinderUser)); //returns array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//DESTRUCTORING IN OBJECTS
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course

const {courseInstructor: instructor} = course //assigning diff name to key

console.log(courseInstructor);
console.log(instructor);



/*JSON 
API Response can be in json format or in array of objects
1. json
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

2. array of objs

[
    {},
    {},
    {}
]
*/