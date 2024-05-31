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

//method6 
// includes() => searches the specified string in the string 

const otherStr  = "The man has three pets and one of them is a tigress";
const pets = otherStr.includes("tigress");
console.log(`the man has a tigress : ${pets}`);
// this methods searches the string "tigress in the otherStr variable and returns value in boolean"

//method7 trim()

const longPara = "        The method trim trims the whitespaces of the String from both starting and ending sides.         ";
// the above strings contains too much unnecessary spaces at start and end to trim this we use the method trim()
console.log(longPara); // with unnecessary spaces 
console.log(longPara.trim()); // without unnecessary spaces 

// method8 indexof()

const newTest = " bring your tuesday homework"
console.log(newTest.indexOf("your"));// output => 7 index of the first occurence of "your";

//method9 padend()
 const callMewhenFree = "will you call me";
 console.log(callMewhenFree.padEnd(23," please")); // this will add please to the end of the string till the 23 index 
 //if the index is more it will repeat

 
// method10 repeat()
 const greets = "Happy "
 console.log(`we are feeling ${greets.repeat(3)}`); // this code will repeat the string Happy to 3 times as the parameters is defined 

// expected outpu => "we are feeling very Happy Happy Happy"

// method11 replace()
const newWords = "we have decided to go to laddakh ."
console.log(newWords.replace("decided", 9)); // the replace method replaces the string and provide a new string 
// the parameters are search value and replace value

// method12 replaceAll()
//this method uses pattern to replace suppose a string contains a text dog in many places and we need to change that to monkey 
const coronviruses = "we have benn hit with corona in many ways . corona causes us to be helpless ,corona has the largest impact on peoples lives taking people lives corona is very bad"
console.log(coronviruses.replaceAll("corona","leach")); // this method changes all corona to leach
console.log(coronviruses.replace("corona","leach")); // this method only changes the first occurence of corona.

// method13 slice()
// The slice() method of String values extracts a section of this string and 
//returns it as a new string, without modifying the original string.
const Wordmatt = "The mirror"
console.log(Wordmatt.slice(4,8));

// output =>
/*          indexStart        indexEnd
                  ↓               ↓
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| T | h | e |   | m | i | r | r | o | r |

                  m   i   r   r
                 _______________
                      ↑
                    Result */
// practice 

const practiceQuestion = "The index of the first character to include in the returned substring."
const indexedWord = practiceQuestion.indexOf("first"); 
console.log(indexedWord);//output => 17

const slicedWord = practiceQuestion.slice(17,22)
console.log(slicedWord); //output=> first

const letter = slicedWord.substring(2,4);
console.log(letter);