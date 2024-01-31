const myArr1 = [1, 2, 3, 4, 5];
const myArr2 = [1, 2, 3, 4];

myArr1.push(myArr2);                            // myArr2 is not adding to myArr1, it'll treat myArr2 a new elemnet inside myArr1 AND IT CHANGES THE ORIGINAL EXISTING ARRAY
console.log(myArr1);                            // [ 1, 2, 3, 4, 5, [ 1, 2, 3, 4 ] ]

// CONCATINATION
const newArr1 = myArr1.concat(myArr2);          // myArr2 is adding to myArr1, it dosen't treat myArr2 a new elemnet inside myArr1 AND IT DOSEN'T CHANGE THE ORIGINAL EXISTING ARRAY
console.log(newArr1);                           // [ 1, 2, 3, 4, 5, [ 1, 2, 3, 4 ], 1, 2, 3, 4 ]

// SPRADE OPERATOR
const newArr2 = [...myArr1, ...myArr2];         // SPRADE operator sprade all the elements of the ARRAYS and combine it inside a new array
console.log(newArr2);                           // [ 1, 2, 3, 4, 5, [ 1, 2, 3, 4 ], 1, 2, 3, 4 ]


const specialArr = [1, 2, 3, 4, [5, 6, 7, [8, 9, [10, 11, 12]]]];
const simpleArr1 = specialArr.flat(1);                                      // BY FLAT we simplify the ARRAY upto depth mentioned that is 1 here.
const simpleArr2 = specialArr.flat(2);                                      // BY FLAT we simplify the ARRAY upto depth mentioned that is 2 here.
const simpleArr3 = specialArr.flat(Infinity);                               // BY FLAT we simplify the ARRAY upto depth mentioned that is INFINITY here, means upto last depth.

console.log(simpleArr1);                                                    // [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9, [ 10, 11, 12 ] ] ]
console.log(simpleArr2);                                                    // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11, 12 ] ]
console.log(simpleArr3);                                                    // [ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12 ]


console.log(Array.isArray(`Aditya`));           // We can ask if this is an ARRAY or not
console.log(Array.from(`Aditya`));              // We can change a string in array

console.log(Array.from({name : `Aditya`}));     // ***IMPORTANT*** WE HAVE TO MENTION WITH WHAT WE WANT TO MAKE THE ARRAY, with KEY or with VALUE

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));  // We can make ARRAY of multiple variables