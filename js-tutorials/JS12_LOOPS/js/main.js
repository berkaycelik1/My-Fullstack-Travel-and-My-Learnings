//Loops
/* let myNumber = 50;
while (myNumber < 50) {
    myNumber += 2;
    console.log(myNumber);
}

do {
    console.log(myNumber);
} while (myNumber < 50 ); */

/* for (let i = 0; i <= 10; i++) {
    console.log(i);
} */

/* let name = "Berkay";
for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
}
 */

/* let name = "Berkay";
let counter = 0;
let myLetter;
while (true) {
    myLetter = name[counter];
    console.log(myLetter);
    if (myLetter === "k") break;
    counter++; */

let name = "Berkay";
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
    counter += 2;
    continue;
    }
if (myLetter === "k") break;
counter++
}
console.log(counter);