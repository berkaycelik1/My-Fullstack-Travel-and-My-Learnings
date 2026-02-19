//Functions

//Methods Declaration Sytntax:

/* "Berkay".toLocaleLowerCase();
Math.random(); */

/* function sum() {
    return 2 + 2;
}

console.log(sum()); */

/* 
function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(2, 6));
 */

/* function sum(num1, num2) {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}

console.log(sum(2,)); */


/* function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(sum(5, 10)); */

/* function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com")); */
/* 
const getUserNameFromEmail = function (email) {
    return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail("dave@davesdomain.com"));  */

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("berkay"));