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
    let hmChoice = prompt("What's your choice(rock, paper, scissors)?");
    return hmChoice;
}

//return the winner of the game
function playRound(humanChoice,computerChoice){
    let message="";
humanChoice=humanChoice.toLowerCase();
//return humanChoice + " "+ computerChoice;
if (computerChoice===humanChoice){
    message="It's a tie!" + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,computerChoice.length)+" and " +humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1,humanChoice.length) ;
} else if (computerChoice==="rock" && humanChoice==="paper"){
message="Wou win! "+ computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,computerChoice.length)+" and " +humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1,humanChoice.length) ;
} else if (computerChoice==="rock" && humanChoice==="scissors"){
message="Wou loose!"+ computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,computerChoice.length)+" and " +humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1,humanChoice.length) ;
} else if (computerChoice==="paper" && humanChoice==="rock"){
message="Wou loose!"+ computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,computerChoice.length)+" and " +humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1,humanChoice.length) ;
} else if (computerChoice==="paper" && humanChoice==="scissors"){
message="Wou win!"+ computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,computerChoice.length)+" and " +humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1,humanChoice.length) ;
} else if (computerChoice==="scissors" && humanChoice==="paper"){
message="Wou loose!"+ computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,computerChoice.length)+" and " +humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1,humanChoice.length) ;
} else if (computerChoice==="scissors" && humanChoice==="rock"){
message="Wou win!"+ computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,computerChoice.length)+" and " +humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1,humanChoice.length) ;
}
return message;
}

console.log(playRound(getHumanChoice(),getComputerChoice()));
