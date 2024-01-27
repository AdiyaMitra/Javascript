const accountId = 12345;                //to declare constant can't be changed
let accounEmail = `abcd@gmail.com`;     // let is block scoped
var accountPassword = `54321`;          // but var is function scoped, and we don't prffer to use var because of confusion of accessibility
accountCity = `Kolkata`;                // javascript allows to make variables without declaring  VAR or LET but this is no a good way to write code

//  accountId = 2;      we can't write this beacuse of accountID is constant
//  console.log(accountId);     if we print this it'll throw an error

console.log(accountId);
console.log(accounEmail);
console.log(accountPassword);
console.log(accountCity);

console.log(accountId);
accounEmail = `xyz@yahoo.com`;
accountPassword = `98765`;
accountCity = `Mumbai`;

console.log(accounEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accounEmail, accountPassword, accountCity])       //console.table prints data in a tabular format