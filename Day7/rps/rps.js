function rpsGame(){
    console.log("Welcome to Rock Paper Scissors Game!");
    const choices = ["rock", "paper", "scissors"];
    const userChoicePrompt = prompt("Enter your choice (rock, paper, scissors):");
    let userChoice = userChoicePrompt.toLowerCase();

    //Generate random number between 1 and 3
    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1){
        computerChoice = "rock";
    }else if(randomNumber === 2){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }
    console.log("User selected", userChoice);
    console.log("Computer selected", computerChoice);

    if((userChoice === "rock" && computerChoice === "scissors") ||
       (userChoice === "paper" && computerChoice === "rock") ||
       (userChoice === "scissors" && computerChoice === "paper")){
        console.log("User wins!");
    }else if((userChoice === "rock" && computerChoice === "paper") ||
              (userChoice === "paper" && computerChoice === "scissors") ||
              (userChoice === "scissors" && computerChoice === "rock")){
        console.log("Computer wins!");
    }else if (userChoice === computerChoice){
        console.log("It's a tie!");
    }else{
        console.log("Invalid input! Please enter rock, paper, or scissors.");
    }

    const playAgainPrompt = prompt("Do you want to play again? (yes/no):");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if(playAgain === "yes"){
        rpsGame();
    }else{
        console.log("Thanks for playing! Goodbye!");
    }   
}

rpsGame();