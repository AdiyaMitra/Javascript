const score = 400;
console.log(score);                                     // it is a number returning a number

const balance = new Number(100);                        // it is declaring a number but returning an object
console.log(balance);                                   // returning an object
console.log(typeof balance);                            // object

console.log(balance.toString());                        // it is converting into a string
console.log(typeof(balance.toString()));                // string
console.log(balance.toString().length);                 // it will return the length of the string of the number
console.log(balance.toFixed(2));                        // it will return the precision value, here it is 2 precision values after decimal

const num1 = 1234.5678;
console.log(num1.toPrecision(5));                       /* Number of significant digits. Must be in the range 1 - 21, inclusive. Returns a string containing a number 
                                                           represented either in exponential or fixed-point notation with a specified number of digits. */

const num2 = 100000000;
console.log(num2.toLocaleString());                     // it ound of and provide comas to a huge number for better understanding. by default it is by US standards.
console.log(num2.toLocaleString('en-In'));              // it is now with indian standards

console.log(Number.MAX_VALUE, Number.MIN_VALUE, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.EPSILON, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN);




console.log(`=============================================MATHS=============================================`)

console.log(Math);
console.log(Math.abs(-4));                  // 4
console.log(Math.round(4.6));               // 5
console.log(Math.round(4.5));               // 5
console.log(Math.round(4.4));               // 4
console.log(Math.ceil(4.6));                // 5
console.log(Math.ceil(4.5));                // 5
console.log(Math.ceil(4.4));                // 5
console.log(Math.floor(4.6));               // 4
console.log(Math.floor(4.5));               // 4
console.log(Math.floor(4.4));               // 4

console.log(Math.random());                 // it always gives random value between 0.0 to 1.0


// DICE game DICE value we want between 1 to 6

const maxVal = 6;
const minVal = 1;
console.log(`DICE value is ${Math.floor(Math.random()*(maxVal - minVal + 1) + minVal)}`);