// SINGLETON
Object.create;          // This is the way to make object by constructor and make a SINGLETON BOJECT

/* If we make anything by constructor we make it as a SINGLETON OBJECT. If we make anything by literals its dosen't made as SINGLETON OBJECT */

// OBJECT LITERALS

const mySym = Symbol("key1");

const jsUser = {
    name : `Aditya`,                                // KEY => name, VALUE => Aditya
    "full name" : `Aditya Mitra`,                   // KEY => full name, VALUE => Aditya Mitra          If we want to use space in the key name we use " " for declaring key
    location : `Kolkata`,                           // KEY => location, VALUE => Kolkata
    email : `abc@def.com`,                          // KEY => email, VALUE => abc@def.com
    isLoggedIn : false,                             // KEY => isLoggedIn, VALUE => false
    lastLogInDays : [`Monday`, `Wednesday`] ,       // KEY => lastLogInDays, VALUE => [`Monday`, `Wednesday`]
    [mySym] : "myKey1"                              // to define Symbols we've to use [] square brackets 
};

console.log(jsUser.email);
console.log(jsUser[`email`]);
console.log(jsUser[`fullName`]);


// ***IMPORTANT***  //

console.log(jsUser[mySym]);                         // For accessing Symbols inside an Object
console.log(typeof(jsUser[mySym]));

jsUser.email = `aditya@yahoo.com`;
console.log(jsUser.email);

Object.freeze(jsUser);                              // we can freeze tha values of an object, after this no values of an object can be changed
jsUser["full name"] = `abcd efgh`;
console.log(jsUser["full name"]);

console.log(jsUser);

// ***METHODS*** //
/* A FUNCTION inside an OBJECT is known as METHOD */

const obj1 = {
    name : `Aditya`,
    email : `abc@gmail.com`
}

console.log(obj1);

obj1.greeting = function(){
    console.log(`Hello World!`);
}

console.log(obj1);
console.log(obj1.greeting());

obj1.greeting2 = function(){
    console.log(`Hello World!, ${this.name}`);      // this reffers to the parent object here for this function which is obj1
}

console.log(obj1);
console.log(obj1.greeting2());