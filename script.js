function getComputerChoice(){
    let n = parseInt(Math.random() * 10)
    if(n < 3)
        return "rock"
    else if(n >= 6)
        return "paper"
    else 
        return "scissors"
}

function getPlayerChoice(){
    let PlayerChoice = prompt("Write 'Rock' 'Paper' or 'Scissors'")
    while(PlayerChoice.toLowerCase() != "rock" && PlayerChoice.toLowerCase() != "paper" && 
            PlayerChoice.toLowerCase() != "scissors"){
        PlayerChoice = prompt("You can only write 'Rock' 'Paper' or 'Scissors'")
    }
    return PlayerChoice.toLowerCase()
}

function playRound(playerSelection, computerSelection, score) {
    if (playerSelection === computerSelection) 
        return "It's a tie"
    else if (playerSelection == "rock" && computerSelection == "paper")
        return "You Lose! Paper beats Rock"
    else if (playerSelection == "rock" && computerSelection == "scissors")
        return "You win! Rock beats Scissors"
    else if (playerSelection == "paper" && computerSelection == "rock")
        return "You win! Paper beats Rock"
    else if (playerSelection == "paper" && computerSelection == "scissors")
        return "You Lose! Scissors beats Paper"
    else if (playerSelection == "scissors" && computerSelection == "rock")
        return "You Lose! Rock beats Scissors"
    else if (playerSelection == "scissors" && computerSelection == "paper")
        return "You win! Scissors beats Paper"
}


function calcScore(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) 
        return 0
    else if ((playerSelection == "rock" && computerSelection == "paper") || 
                (playerSelection == "paper" && computerSelection == "scissors") || 
                (playerSelection == "scissors" && computerSelection == "rock"))
        return -1
    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
                (playerSelection == "paper" && computerSelection == "rock") || 
                (playerSelection == "scissors" && computerSelection == "paper"))
        return 1
}

   


function game(){
    let score = 0;
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice()
        const computerSelection = getComputerChoice() 

        score += calcScore(playerSelection, computerSelection)

        console.log("You chose " + playerSelection + " and coputer chose " + computerSelection)
        console.log(playRound(playerSelection, computerSelection))
        console.log("\n")   
    }
    if(score == 0)
        console.log("************* It's a tie *************")
    else if(score >= 1)
        console.log("************* You win! *************")
    else if(score <= -1)
        console.log("************* You lose! *************")
}

game()