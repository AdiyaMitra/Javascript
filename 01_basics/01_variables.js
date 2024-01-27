const accountId = 12345;                //to declare constant can't be changed
let accounEmail = `abcd@gmail.com`;     // let is block scoped
var accountPassword = `54321`;          // but var is function scoped, and we don't prffer to use var because of confusion of accessibility
accountCity = `Kolkata`;                // javascript allows to make variables without declaring  VAR or LET but this is no a good way to write code
let accountState ;                      // if no value in variable is decleared then it'll store undefined


//  accountId = 2;      we can't write this beacuse of accountID is constant
//  console.log(accountId);     if we print this it'll throw an error


console.log(accountId);
console.log(accounEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);              // it'll print undefined

accounEmail = `xyz@yahoo.com`;
accountPassword = `98765`;
accountCity = `Mumbai`;
accountState = `Maharashtra`

console.log(accountId);
console.log(accounEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(`accountState`);            // now it'll print Maharashtra

console.table([accountId, accounEmail, accountPassword, accountCity, accountState])       //console.table prints data in a tabular format