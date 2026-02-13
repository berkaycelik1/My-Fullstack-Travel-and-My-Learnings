// Condditionals: IF Statements
/* //syntax
if (condation) {
    //run some code
} else {
    //run some diffirent code
} */

// Condditionals: IF Statements
/* let soup;
let reply;
if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = `Sorry, we're out of ${soup}`;
}
console.log(reply);
 */

// Condditionals: IF Statements
/* let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
    reply = "No soup for you!";
    } else if (soup && crackers) {
    reply = `Here's your order of ${soup}`;
} else if (soup) {
    reply = `Here's your order of ${soup} & crackers.`;
} else {
    reply = "Sorry we're out of soup";
}
console.log(reply); */

// Condditionals: IF Statements
/* let testScore = 10;
let grade;
let collegeStudent = true;
if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    // Nested if statement
     if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
}
console.log(grade); */

// Condditionals: IF Statements

// Decision tree!
if (playerOne === computer) {
// tie game!
} else if (playerOne === "rock") {
    if (computer === "paper") {
        // computer wins
    } else {
        //playerOne wins
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        // computer wins
    } else {
        //playerOne wins
    }
} else {
    if (computer === "rock") {
        //computer wins
    } else {
        // playerOne wins
    }
}
