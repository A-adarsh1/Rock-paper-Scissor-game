let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const resetBtn = document.querySelector("#reset-game");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


const genComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx]
};


const drawGame = () => {
  msg.innerText = "Game was Draw!, Play again";
  msg.style.backgroundColor = "#00111c";
}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    computerScore++;
    compScorePara.innerText = computerScore;
    msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const reset = () => {
  userScorePara.innerText = 0;
  compScorePara.innerText = 0;
  userScore = 0;
  computerScore = 0;
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "#00111c";
}


const playGame = (userChoice) => {
  // generate user choice
  const compChoice = genComputerChoice();

  // conditons
  if(userChoice === compChoice){
    // draw
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      // paper scissor
      userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
      // rock scissor
      userWin = compChoice === "scissor" ? false : true;
    }else{
      // rock paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }

}

resetBtn.addEventListener("click", reset);
