const arr = ['rock', 'paper', 'scissors']

function getComputerChoice () {
    const Index = Math.floor(Math.random() * arr.length);
    return arr[Index];
}

function getHumanChoice () {

    let input = prompt("Enter Rock, Paper, or Scissors").toLowerCase();

    if(input === 'rock' || input === 'paper' || input === 'scissors'){
        return input
    }else {
        console.log("Invalid Choice");
    }

}

function playGame(){

    let humanScore = 0;
    let ComputerScore = 0;

    function playRound (HumanChoice, ComputerChoice) {

    HumanChoice = HumanChoice.toLowerCase();
    ComputerChoice = ComputerChoice.toLowerCase();

    if(HumanChoice === 'paper' && ComputerChoice === 'rock' || 
        HumanChoice === 'rock' && ComputerChoice === 'scissors' || 
        HumanChoice === 'scissors' && ComputerChoice === 'paper' ){
        humanScore++;
        console.log(`You lose! ${HumanChoice} beats ${ComputerChoice}`)
    } else if (HumanChoice === 'rock' && ComputerChoice === 'paper' ||
        HumanChoice === 'scissors' && ComputerChoice === 'rock' || 
        HumanChoice === 'paper' && ComputerChoice === 'scissors'
    ){
        ComputerScore++;
        console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}`) 
    } else if(HumanChoice === ComputerChoice) {
        console.log("It's a tie!!!")
    } else {
        console.log("Invalid Input")
    }
        console.log(`Score : Human ${humanScore} - Computer ${ComputerScore}`)
    }

    for(let i = 1; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > ComputerScore) {
        console.log("You lose! Human beats Computer")
    } else if (ComputerScore > humanScore){
        console.log("You lose! Computer beats Human");
    } else {
        console.log("It's a tie");
    }
}

playGame();