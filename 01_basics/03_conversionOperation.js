let score1 = 33;
let score2 = `33`;
let score3 = `33abc`;
let score4 = null;
let score5 = undefined;

console.log(typeof score1);     // number
console.log(typeof(score1));    // number

console.log(typeof score2);     // string
console.log(typeof(score2));    // string

let valueInNumber = Number(score2);
let valueInNumber2 = Number(score3);
let valueInNumber3 = Number(score4);
let valueInNumber4 = Number(score5);

console.log(typeof valueInNumber);      // number
console.log(typeof(valueInNumber));     // number
console.log(valueInNumber);
console.log(typeof valueInNumber2);     // number,    it'll convert it to a number but as it 33abc is not number it'll return NaN
console.log(valueInNumber2);            // NaN (Not a Number)
console.log(typeof valueInNumber3);     // number, converts it to 0
console.log(valueInNumber3);            // 0
console.log(typeof valueInNumber4);     // number, coverts it to NaN
console.log(valueInNumber4);            // NaN


//------------------------------------------------------------------------------------------------------------------------------------------//
//Boolean
console.log("-----------BOOLEAN-----------");

let bool1 = true
let bool2 = false

console.log(typeof bool1, typeof bool2);                // boolean boolean
console.log(bool1, bool2);                              // true false

let convBool1 = Number(bool1)
let convBool2 = Number(bool2)

console.log(typeof convBool1, typeof convBool2);        // number number
console.log(convBool1, convBool2);                      // 1 0

let isLoggedIn = 1;

console.log(typeof isLoggedIn);                         // number
console.log(isLoggedIn);                                // 1

let boolIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof boolIsLoggedIn);                     // boolean
console.log(boolIsLoggedIn);                            // true

//" 0, false, undefined, null, NaN, empty_string " always return FALSE; anything other than this will return TRUE

//------------------------------------------------------------------------------------------------------------------------------------------//
//String
console.log("-----------STRING-----------");

let aNumber = 33;
console.log(typeof aNumber);                // number
console.log(aNumber);                       // 33

let stringNumber = String(aNumber);
console.log(typeof stringNumber);           // string
console.log(stringNumber);                  // 33


//=============================================OPERATIONS=============================================//

console.log(`=============================================OPERATION=============================================`);

let val1 = 3;
let negVal = -val1;
console.log(negVal);        // -3

console.log(3+2);           // 5
console.log(3-2);           // 1
console.log(3*2);           // 6
console.log(3**2);          // 9
console.log(3/2);           // 1.5
console.log(3%2);           // 1

//--------------------concatination--------------------
let str1 = `hello`;
let str2 = ` aditya`;
let str3 =  str1 + str2;
console.log(str3);          // hello aditya

console.log("1" + 2);       // 12
console.log(1 + "2");       // 12
console.log(1 + 2 + `3`);   // 33
console.log(1 + `2` + 3);   // 123
console.log(`1` + 2 + 3);   // 123

console.log(true);          // true
console.log(+true);         // 1 this is returning 1 because it converts the value of true in  numaric that is 1  AND console.log(true+); will return error

//--------------------prefix and postfix--------------------

console.log(`--------------------prefix and postfix--------------------`);
let prePost1 = 5;
let prePost2 = 8;

console.log(prePost1++);    // 5 first the value is working then the operation happening
console.log(++prePost2);    // 9 first the operation is working then the value happening
console.log(prePost1);      // 6 incremented value printed
console.log(prePost2);      // 9 incremented value printed