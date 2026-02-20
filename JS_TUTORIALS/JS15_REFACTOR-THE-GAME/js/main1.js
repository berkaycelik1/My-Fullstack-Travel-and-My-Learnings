let playGame = confirm("Shall we play rock, paper or scissors?");
if (playGame) {
    let playerChoise = prompt("Please enter rock, paper or scissors.");
    if (playerChoise) {
        let playerOne = playerChoise.trim().toLowerCase();
        if (playerOne === "rock" || 
            playerOne === "paper" || 
            playerOne === "scissors"
        ) {

        let computerChoise = Math.floor(Math.random() * 3 + 1);
        let computer = 
            computerChoise === 1 
                ? "rock"
                :computerChoise === 2 
                ? "paper"
                : "scissors";

            let result =
            playerOne === computer
            ? "Tie game!"
            :playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing");  
        } else {
            alert("You didn't enter rock, paper or scissors");
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.");
    }
} else {
    alert("Ok, maybe next time");
}


/* 
    let play = confirm("1-10 arası sayı tuttum. Bil bakalım hangisi?");
    if (play) {
       let computerNumber = Math.floor(Math.random() * 10 + 1);
       let guess = prompt("Tahminin nedir?");
       if (guess) {
        guess = Number(guess);
        if (guess === computerNumber) {
            alert(`Tebrikler! Doğru bildin. Sayı : ${computerNumber}`);
        } else if (guess > computerNumber) {
            alert(`Çok çıktın! Sayı daha küçüktü. (Sayı: ${computerNumber})`);
       } else {
        alert(`Az söyledin! Sayı daha büyüktü. (Sayı: ${computerNumber})`);
       }
    } else {
        alert("Hey, bir sayı girmedin!");
    }
    } else {
        alert("Korktun mu? 🐔 Belki daha sonra oynarız");
    }  */