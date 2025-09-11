const arr = ['rock', 'paper', 'scissors']

function getcomputerChoice () {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function gethumanChoice () {

    let input = prompt("Enter Rock, Paper, or Scissors").toLowerCase();

    if(input === 'rock' || input === 'paper' || input === 'scissors'){
        return input
    }else {
        console.log("Invalid Choice");
    }

}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice === 'paper' && computerChoice === 'rock' || 
        humanChoice === 'rock' && computerChoice === 'scissors' || 
        humanChoice === 'scissors' && computerChoice === 'paper' ){
        humanScore++;
        console.log(`You lose! ${humanChoice} beats ${computerChoice}`)
    } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'scissors' && computerChoice === 'rock' || 
        humanChoice === 'paper' && computerChoice === 'scissors'
    ){
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`) 
    } else if(humanChoice === computerChoice) {
        console.log("It's a tie!!!")
    } else {
        console.log("Invalid Input")
    }
        console.log(`Score : Human ${humanScore} - Computer ${computerScore}`)
    }

    for(let i = 1; i<=5; i++){
        const humanSelection = gethumanChoice();
        const computerSelection = getcomputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore) {
        console.log("You lose! Human beats Computer")
    } else if (computerScore > humanScore){
        console.log("You lose! Computer beats Human");
    } else {
        console.log("It's a tie");
    }
}

playGame();
