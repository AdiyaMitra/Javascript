"use strict";       // treat all JS code as newer version

// alert( 3 + 3 );  // we cant use this right now because alert is a window component it works only in browser not in Node.js

let name = "Aditya"
let age = 25
let isLoggedIn = false
let city
let state = null

/*
nunmber => 2 to power 53
bigint
string => "" '' ``
boolean => true/false
null => it is a datatype but it's standalone value by itself, if any variable is ste value null means it's setted by a value
undefined => it means the value is not assigned till now
symbol => for defining uniqueness we use symbol
object
*/


// typeof gives us the data type of some variable or value

console.log(typeof "abc");          //string
console.log(typeof 123);            //number
console.log(typeof name);           //string
console.log(typeof age);            //number
console.log(typeof isLoggedIn);     //boolean
console.log(typeof city);           //undefined
console.log(typeof state);          //object
console.log(typeof undefined);      //undefined
console.log(typeof null);           //object
