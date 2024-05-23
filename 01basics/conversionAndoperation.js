/* ******************Data Type Conversion*************** */

// Converting a text String To a Number 

let name = "Farhan";
//variable with a value of string
let conversedname = Number(name);
console.log(conversedname); // output Value => NaN (Not a Number)
console.log(typeof(conversedname)); // datatype of this variable is number

//converting a number inside a string to a number

let number = "43"; // variable with a string containing number
let conversednumber = Number(number);
console.log(conversednumber); // output value => 43 
console.log(typeof(conversednumber)); // String converted to number (DataType)

// converting an Empty string to a number

let iphone = "";
let iphoneNew = Number(iphone);
console.log(iphoneNew); // output value => 0
console.log(typeof(iphoneNew)); // String converted to number (DataType)

//converting a textnumber mixed string to a number 

let userName = "farhan123";
let userNameNew = Number(userName);
console.log(userNameNew); // output value => NaN
console.log(typeof(userNameNew)); // String converted to number (DataType)


