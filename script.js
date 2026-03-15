//console.log("test"); //testing if the source file is linked properly

let humanScore=0;
let computerScore=0;
const divResults=document.querySelector(".results");
let counter=0;

//create a function to return a random number between 0 and 2
function getRandomNumber(max=3){
return Math.floor(Math.random() * max);
}

//create a function to return rock, paper, scissors based random number
function getComputerChoice(cpNumber=getRandomNumber()){
let cpChoice=["rock","paper","scissors"];
return cpChoice[cpNumber];
}


function playGame(hmSelection){

    //return the winner of the round
    function playRound(humanChoice,computerChoice){
        
        // function to capitalize result
        function capitalize(txtToChange){
            txtToChange=txtToChange.charAt(0).toUpperCase() + txtToChange.slice(1,txtToChange.length);
            return txtToChange;
        }

    //function to compute the message
    function compMessage(result, computerChoice,humanChoice){
    let message="";
    message=result+ " Computer: " + capitalize(computerChoice) +" and Human: " + capitalize(humanChoice);
    
    divResults.appendChild(document.createTextNode(message));
    divResults.appendChild(document.createElement("br"));
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


    const humanSelection = hmSelection;
const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}


//runs the game based on click, upt five times
const usrButtons=document.querySelector(".buttons");
usrButtons.addEventListener("click", function(event){
if(counter<5)
{
    playGame(event.target.value.toLowerCase());
    counter++;
} 
if (counter===5){
    divResults.appendChild(document.createTextNode("Results: Computer: "+computerScore+ " Human: "+humanScore +". "));
    divResults.appendChild(document.createTextNode(computerScore>humanScore? "I win!":computerScore<humanScore?"You win!":"It's a tie!"));
}

}
);
