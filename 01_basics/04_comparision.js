console.log( 2 > 1 , ` 2 > 1 `);        // true
console.log( 2 >= 1 , ` 2 >= 1 `);      // true
console.log( 2 < 1 , ` 2 < 1 `);        // false
console.log( 2 == 1 , ` 2 == 1 `);      // false
console.log( 2 != 1 , ` 2 != 1 `);      // true

console.log("2" > 1 ,` "2" > 1`);       // true             javascript already changes the "2" in number and then compearing
console.log("02" == 2 ,` "02" == 2`);   // true             javascript already changes the "02" in number and then compearing
console.log(null > 0, ` null > 0`);     // false            javascript already changes the null in empty value some times NaN or 0 and then compearing
console.log(null == 0 , ` null == 0`);  // false            javascript already changes the null in empty value some times NaN or 0 and then compearing
console.log(null >= 0 , ` null >= 0`);  // true             javascript already changes the null in empty value some times NaN or 0 and then compearing
console.log(undefined > 0, ` undefined > 0`);     // false  javascript already changes the null in empty value some times NaN or 0 and then compearing
console.log(undefined == 0 , ` undefined == 0`);  // false  javascript already changes the null in empty value some times NaN or 0 and then compearing
console.log(undefined >= 0 , ` undefined >= 0`);  // false  javascript already changes the null in empty value some times NaN or 0 and then compearing

/* The reason is that an equality check == and comparisons > < >= <= work differently.  Comparisons convert the null to a number, 
treating as 0. That's why null>=0 is TRUE and null>0 is FALSE , same goes for UNDEFINED*/

console.log("02" === 2 , ` "02" === 2`);// false    strict check comparision it check the VALUE as well as the datatype