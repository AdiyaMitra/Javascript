let myDate = new Date();

console.log(typeof myDate);

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

let myCreatedDate = new Date(2024, 0, 25);
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2024, 0, 25, 5, 3, 42);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date(`2024-01-25`);
console.log(myCreatedDate3.toDateString());

let myCreatedDate4 = new Date(`01-25-2024`);
console.log(myCreatedDate4.toDateString());

// TIME STAMP

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());