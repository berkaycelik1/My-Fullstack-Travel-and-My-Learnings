

/* //Arrays
const myArray = [];

// add elements to an array
myArray[0] = "Berkay";
myArray[1] = 1001;
myArray[2] = false;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1 ]);

console.log(myArray[1]);
 */


/* //Arrays
const myArray = [];

// add elements to an array
myArray[0] = "Berkay";
myArray[1] = 1001;
myArray[2] = false;

myArray.splice(1, 1, 42);

console.log(myArray);
console.log(myArray[1]);
 */

/* // Arrays
const myArray = ["A", "B", "C", "D", "E", "F"];

const newArray = myArray.slice(2, 5);

console.log(newArray); */


/* // Arrays
const myArray = ["A", "B", "C", "D", "E", "F"];

myArray.reverse();

console.log(myArray); */


/* // Arrays
const myArray = ["A", "B", "C", "D", "E", "F"];

const newString = myArray.join();

const newArray = newString.split(",");

console.log(newArray);
 */

/* // Arrays
const myArrayA = ["A", "B", "C",];
const myArrayB = ["D", "E", "F"];

const newArray = myArrayA.concat(myArrayB);

console.log(newArray); */


/* // Arrays
const myArrayA = ["A", "B", "C",];
const myArrayB = ["D", "E", "F"];

const newArray = [...myArrayA, ...myArrayB];

console.log(newArray);
 */

// Arrays
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
//or
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);