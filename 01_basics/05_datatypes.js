/* JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime 
and can change throughout the program as we assign different values to them. */

// Primitive
// Primitive datatype means if we copy any data, the value of it will be copied and if we change the copied data it wll not gonna change the main value
// Primitive datatype is call by value, means the value will be copied

// ALL PRIMITIVE DATATYPES USE STACK MEMORY

// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;                      // number
const scoreValue = 100.3;               // number

const isLoggedIn = false;               // boolean
const outSideTemp = null;               // object(null returns type object)
let userEmail;                          // undefined
const bigNum = 12345678900987654321n;   // BigInt

console.log(typeof score, typeof(scoreValue), typeof isLoggedIn, typeof outSideTemp, typeof userEmail, typeof(bigNum));

//------------------------SYMBOL------------------------//
const id = Symbol(`123`);
const anotherId = Symbol(`123`);
console.log(id === anotherId);          // FALSE though the values of both is similar but Symbols are always be unique and different.



// Reference (Non Primitive)
/* Reference datatype means if we copy any data, the value of it will not be copied, the refernce of the data will be copied and 
if we change the copied data it wll gonna change the main value because no data will be copied and it reffers to the referece of the main data */
// Reference datatype is call by value, means the value will be copied

// ALL REFERENCE DATATYPES USE HEAP MEMORY

// Array, Object, Functions

const heros = [`IronMan`, `Hulk`, `Thor`];
let myObj = {
    name : `Aditya`,
    age : `25`
}
const myFunction = function(){
    console.log(`Hello World`);
}

console.log(typeof(heros), typeof myObj, typeof myFunction);    //object object function(function object)



// HEAP and STACK

let name = `Aditya`;
console.log(`the name before coped is ${name}`);

let copiedName = name;
console.log(`the copiedName before before change is ${copiedName}`);

copiedName = `Saeli`;
console.log(`the name after change is ${name} and the copiedName after change is ${copiedName}`);   /* Value of name is not changed but value of
copiedName is changed */





let obj1 = {
    name : `Aditya`,
    age : `25`

}
console.log(`the obj1 before coped is ${obj1.name} ${obj1.age}`);

let obj2 = obj1;
console.log(`the obj2 before coped is ${obj2.name} ${obj2.age}`);

obj2.name = `Saeli`;
obj2.age = `26`;

console.log(`the obj1 after change of obj2 is ${obj1.name} ${obj1.age} and the obj2 after change of obj2 is ${obj2.name} ${obj2.age}`);     /* Value of 
obj1 is changed as well as value of obj2 is changed though we didn't make any change in obj1 */

