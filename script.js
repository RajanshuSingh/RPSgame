let userScore=0;
let computerScore=0;

const choices= document.querySelectorAll('.choice');
const msg=document.getElementById('msg');

const userScore_span=document.getElementById('user-score'); 
const computerScore_span=document.getElementById('computer-score');
const genComputerChoice= () => {

    let options= ["Rock", "Paper", "Scissor"];
    let randIdx= Math.floor(Math.random()*3);
    return options[randIdx];


}



const drawGame = ()=>
{

    msg.innerHTML="It's a draw.Play Again!";
}

const showWinner=(userWin, userChoice, computerChoice)=> {
if(userWin){

    userScore++;
    userScore_span.innerHTML=userScore;
    // console.log("You win!");
    msg.innerHTML=`You win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor="green";
}
else{
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    
    msg.innerHTML=`Computer wins! ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}
}


const playGame=(userChoice)=>{
    console.log("user choice =", userChoice);
    //generate computer choice
    const computerChoice=genComputerChoice();
    console.log("computer choice =", computerChoice);

    if(userChoice === computerChoice){
        drawGame();
     }
else{
let userWin=true;
if(userChoice === "Rock"){
   userWin = computerChoice ==="Paper" ? false : true;
    }
else if(userChoice === "Paper"){ 
    userWin = computerChoice ==="Scissor" ? false : true;
}

else{
    userWin = computerChoice ==="Rock" ? false : true;
}

showWinner(userWin , userChoice, computerChoice);

}



    
     
};



choices.forEach((choice) => {
choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
    // console.log("Choice was clicked", userChoice);
    playGame(userChoice);
});

});


