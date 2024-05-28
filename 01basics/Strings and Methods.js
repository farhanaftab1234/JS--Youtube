// ++++======== Strings and its methods 

// method1 .at()
// by this method we can find the character at a specified index position 

let str1st = "i want to be a great developer";
let result = str1st.charAt(7);
console.log(result); // output => gives the character at the index of 7 which is t;

// method2 .lenght()
console.log(str1st.length); //output => gives the length og the strings in number with index 0

//method3 
console.log(str1st.charCodeAt(29)); //output=> gives the utfcode of the character at the 29 index

//method4

let mystring = "hello"
let mystr2 = "world"
let resulted = mystr2.concat("we");
console.log(resulted);
let String1 = mystring;

String1 = mystring.concat(" farhan");
console.log(String1);
console.log(mystring);

//method5
//The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false a

const greatestPlayer = "Virat kohli is the best cricketer of the century";
console.log(greatestPlayer.endsWith("century")); // output true cause the string ends with century strings
console.log(greatestPlayer.endsWith("kohli", 11));
// this checks the string "kohli" ends on index 11 and returns value in boolean




