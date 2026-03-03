//console.log("test"); //testing if the source file is linked properly

let humanScore=0;
let computerScore=0;

//create a function to return a random number between 0 and 2
function getRandomNumber(max=3){
return Math.floor(Math.random() * max);
}

//create a function to return rock, paper, scissors based random number
function getComputerChoice(cpNumber=getRandomNumber()){
    cpChoice="";
switch(cpNumber){
    case 0: cpChoice="rock";
    break;
    case 1: cpChoice="paper";
    break;
    case 2: cpChoice="scissors";
    break;
}
return cpChoice;
}

//read user input, and write it to the console
function getHumanChoice(){
    let hmChoice = prompt("What's your choice(rock, paper, scissors)?").toLowerCase();
    return hmChoice;
}

function playGame(){

    //return the winner of the round
    function playRound(humanChoice,computerChoice){
    

    //function to compute the message
    function compMessage(result, computerChoice,humanChoice){
    let message="";
    message=result+ " Computer: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,computerChoice.length)+" and Human: " +humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1,humanChoice.length);
    console.log(message);
    }

    if (computerChoice===humanChoice){
        compMessage("It's a tie!", computerChoice,humanChoice);
    } else if (computerChoice==="rock" && humanChoice==="paper"){
        compMessage("You win!", computerChoice,humanChoice);
        humanScore++;
    } else if (computerChoice==="rock" && humanChoice==="scissors"){
        compMessage("You loose!", computerChoice,humanChoice);
        computerScore++;
    } else if (computerChoice==="paper" && humanChoice==="rock"){
        compMessage("You loose!", computerChoice,humanChoice);
        computerScore++;
    } else if (computerChoice==="paper" && humanChoice==="scissors"){
        compMessage("You win!", computerChoice,humanChoice);
        humanScore++;
    } else if (computerChoice==="scissors" && humanChoice==="paper"){
        compMessage("You loose!", computerChoice,humanChoice);
        computerScore++;
    } else if (computerChoice==="scissors" && humanChoice==="rock"){
        compMessage("You win!", computerChoice,humanChoice);
        humanScore++;
    }
    }

for(let i=0;i<5;i++){
    const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
   }

console.log("Results: -Computer: "+computerScore+ " -Human: "+humanScore);
}

playGame();