/* const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending
console.log(users);
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
   return response.json();
})
.then(data => {
    data.forEach(user => {
        console.log(user);
    })
}); */

/* const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anatherFunch = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}
anatherFunch();
console.log(myUsers.userList); */


/* const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}
getAllUserEmails();
 */

/* const jokeObject = {
    id: 'P71TnyI6prc',
     joke: "Me and my mates are in a band called Duvet. We're a cover band."
     }
 */
/* const postData = async (jokeObj) => {

    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();

    console.log(jsonResponse.headers);
    }
   postData(jokeObject); */


const requestJoke = async (firstName, lastName) => {

const response = await fetch("https://api.chucknorris.io/jokes/random");    const jsonResponse = await response.json();

    console.log(jsonResponse.value);
    }
requestJoke("Bruce", "Lee");