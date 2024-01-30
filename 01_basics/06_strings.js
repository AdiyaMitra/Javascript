const fName = `Aditya`;
const lName = `Mitra`;

console.log(fName + lName);         // bad practice

console.log(`My first name is ${fName} and my last name is ${lName}`);      // using backticks ` ` wew can use string interpolation

console.log(`My first name is ${fName.toUpperCase()} and my last name is ${lName.toUpperCase()}`);

const aName = new String(`Aditya`);     // it also makes a new string but by invoking an object, if we run this in browser console we can see it is represented as an Object
console.log(aName);
console.log(typeof aName);              // Object

console.log(fName.length);                          // Returns the length of the string
console.log(fName.toUpperCase());                   // Returns the whole string in UpperCase
console.log(fName.charAt(3));                       // Returns the charecter in some perticuler index
console.log(fName.indexOf(`t`));                    // Returns the index of some perticuler charecter
console.log(fName.substring(0, 4));                 // Returns the substring starting from 0th position upto 4 values but we can't use negative value in substring
console.log(fName.slice(2, 4));                     // Returns the sliced string starting from 0th position upto 4 values and we can use negative value in slice
//Starting index (2) and upto (4)
console.log(fName.slice(-4, -1));                   // Starting index (Length-4) and upto (Length-1)

/* 
0 : A
1 : d
2 : i
3 : t
4 : y
5 : a
(2, 4) => after 2nd position means after "d" means from "i" we will start and upto 4th position means t, so the O/P is "it"
(-4, -1) => after Length-4 (6 - 4 = 2) 2nd position means after "d" means from "i" we will start and upto Length-1 (6 - 1 = 5) upto 5th position means y, so the O/P is "ity"
*/

let str1 = `        ADITYA          `;
console.log(str1);
console.log(str1.trim());                           // it trims the unnecesarry blank spaces

let str2 = `abcd%20efgh`;
console.log(str2);
console.log(str2.replace(`%20`, `-`));              // it replaces the "%20" with "-"

console.log(str2.includes(`ef`));                   // it verifies that if the value "ef" is present inside theb string or not, if yes it returns TRUE
console.log(str2.includes(`xy`));                   // it verifies that if the value "xy" is present inside theb string or not, if no it returns FALSE

let str3 = `aditya-mitra-25`
console.log(str3.split(`-`));                       // it splits the string on basis on a charecter mentioned inside the (), and returns a array