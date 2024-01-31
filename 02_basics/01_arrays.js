const myArr = [0, 1, 2, 3, 4, 5, true, `Aditya`];       /* An array is a special variable (reference type or non-prrimitive type), which can hold more than one value may be 
                                                           same datatype or may be different datatypes. ** JavaScript arrays are resizable and can contain a mix of different 
                                                           data types. (When those characteristics are undesirable, use typed arrays instead.). ** In javascript array indexing 
                                                           starts from 0 and goes on. */

console.log(myArr);
console.log(myArr[0], myArr[myArr.length-2]);

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2);

// ARRAY methods

myArr.push(6);                                          // To add new element at the last of an array
console.log(myArr);

myArr.pop();                                            // To remove element from the last of an array
console.log(myArr);

myArr.unshift(-1);                                      // To add new element at the first of an array
console.log(myArr);

myArr.shift();                                          // To remove element from the first of an array
console.log(myArr);

console.log(myArr.includes(9));                         // Asking for an element is present in the array or not, and return type is boolean

console.log(myArr.indexOf(3));                          // Asking for the index of an element is present in the array, if present it returns the index of that value
console.log(myArr.indexOf(9));                          // Asking for the index of an element is present in the array, if present it is not returns -1

const newArr = myArr.join();

console.log(myArr, typeof myArr);                       // the original array                               [ 0, 1, 2, 3, 4, 5, true, 'Aditya' ] object
console.log(newArr, typeof newArr);                     // it binds the array and retuns as a string.       0,1,2,3,4,5,true,Aditya string



// SLICE

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

// SPLICE

console.log("A ", myArr);
const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);

// SLICE takes the the valuie with in the range given and the last element of the range is not added, AND IT DOSE NOT MANUPULATE THE ORIGINAL ARRAY
/* SPLICE takes the the valuie with in the range given and the last element of the range is added, BUT THE DIFFERENCE IS IT TOOK THAT PART FROM THE ORIGINAL ARRAY AND 
                                                                                                   MANUPULATE THE ORIGINAL ARRAY */

                                                                                                   