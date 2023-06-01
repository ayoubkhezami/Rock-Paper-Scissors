const computerChoiceDisplay = document.getElementById('Computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result'); 
const possibleChoices=document.querySelectorAll('button'); 

let userChoice 
let computerChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice=e.target.id // get the element where the event done 
    userChoiceDisplay.innerHTML=userChoice 
    generateComputerChoice()

})) 


function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random() * 3) +1;

    if(randomNumber===1){
        computerChoiceDisplay.innerHTML='rock';

    }
    else if(randomNumber===2){
        computerChoiceDisplay.innerHTML='paper';

    } 
    else if(randomNumber===3){
        computerChoiceDisplay.innerHTML='scissors';

    } 

}