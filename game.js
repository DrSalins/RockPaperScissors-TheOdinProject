function startGame() {
  let humanScore = 0;
  let computerScore = 0;
  let getComputerChoice = () => {
    let result = Math.floor(Math.random() * 3);
    if (result == 0) {
      return "rock";
    } else if (result == 1) {
      return "scissors";
    } else {
      return "paper";
    }
  };
  console.log(getComputerChoice());

  let getHumanChoice = () => {
    let hChoice = prompt("What is your choice:").toLowerCase();
    return hChoice;
  };
  console.log(getHumanChoice());

  let playGame = () => {
    let playRound = (humanChoice, computerChoice) => {
      if (humanChoice == computerChoice) {
        return "It's a tie!";
      } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
      ) {
        humanScore++;
        playerScoreText.textContent = humanScore;
        return "You win! " + humanChoice + " beats " + computerChoice;
      } else {
        computerScore++;
        compuScoreText.textContent = computerScore;
        return "You lose! " + computerChoice + " beats " + humanChoice;
      }
    };
    for (let i = 0; i < 5; i++) {
      let humanChoice = getHumanChoice();
      let computerChoice = getComputerChoice();
      console.log(playRound(humanChoice, computerChoice));
      console.log(
        `Your Score:${humanScore} ===== Computer's Score: ${computerScore}`
      );
    }
    if (humanScore > computerScore) {
      return `You have won the game! Score:${humanScore}`;
    } else if (computerScore > humanScore) {
      return `Computer wins the game! Score:${computerScore}`;
    } else {
      return `It's a tie!`;
    }
  };

  console.log(playGame());
}
