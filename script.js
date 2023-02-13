let score = [0,0]

const btnR = document.getElementById("r")
const btnP = document.getElementById("p")
const btnS = document.getElementById("s")
const scoreDiv = document.getElementById("score")
const gameCommentDiv = document.getElementById("game-comment")
const retryDiv = document.getElementById("retry")

function newGame(){
    btnR.disabled = false
    btnP.disabled = false  
    btnS.disabled = false
    scoreDiv.innerHTML = ''
    gameCommentDiv.innerHTML = ''
    retryDiv.innerHTML = ''
    score = [0,0]
}

function getComputerChoice(){
    let n = parseInt(Math.random() * 10)
    if(n < 3)
        return "r"
    else if(n >= 6)
        return "p"
    else 
        return "s"
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) 
        return "It's a tie"
    else if (playerSelection == "r" && computerSelection == "p")
    {
        score[1]++
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection == "r" && computerSelection == "s")
    {
        score[0]++
        return "You win! Rock beats Scissors"
    }
    else if (playerSelection == "p" && computerSelection == "r")
    {
        score[0]++
        return "You win! Paper beats Rock"
    }
    else if (playerSelection == "p" && computerSelection == "s")
    {
        score[1]++
        return "You Lose! Scissors beats Paper"
    }
    else if (playerSelection == "s" && computerSelection == "r")
    {
        score[1]++
        return "You Lose! Rock beats Scissors"
    }
    else if (playerSelection == "s" && computerSelection == "p")
    {
        score[0]++
        return "You win! Scissors beats Paper"
    }
}

function play(playerSelection){
    if(score[0] < 3 && score[1] < 3) {
        let computerSelection = getComputerChoice()
        //console.log(playRound(playerSelection, computerSelection))
        gameCommentDiv.innerHTML = '<p>' + playRound(playerSelection, computerSelection) +'</p>'
        scoreDiv.innerHTML = '<p>' + score[0] +" | "+ score[1] +'</p>'
        if (score[0] == 3 || score[1] == 3)
            endGame()
    }
    else
        endGame()
}

function endGame(){
    btnR.disabled = true
    btnP.disabled = true  
    btnS.disabled = true
    retryDiv.innerHTML = '<button id="rt" class="btn">Retry</button>'
    document.getElementById("rt").addEventListener('click', () => newGame())       
    if(score[0] > score[1])
        gameCommentDiv.innerHTML = "you won the game gg !!!"
    else 
        gameCommentDiv.innerHTML = "you lost the game sad :("
}


btnR.addEventListener('click', () => play("r"))
btnP.addEventListener('click', () => play("p"))
btnS.addEventListener('click', () => play("s"))



