export const hideRules = () => {
    const rulesContainer = document.querySelector(".rules-container").style

    rulesContainer.display = "none"
}

export const showRules = () => {
    const rulesContainer = document.querySelector(".rules-container").style

    rulesContainer.display = "block"
}

export const showChosePlay = () => {
    const playAgain = document.querySelector(".win-or-lose-mobile-container").style
    const playAgainMiddle = document.querySelector(".winning-message-middle-container").style
    const playResults = document.querySelector(".play-choosing-computer-section-container").style
    const playChoice = document.querySelector(".play-choosing-section-container").style

    playAgain.visibility = "hidden"
    playAgainMiddle.display = "none"
    playResults.display = "none"
    playChoice.display = "block"
}

export const playerMove = () => {
    const playResults = document.querySelector(".play-choosing-computer-section-container").style
    const playChoice = document.querySelector(".play-choosing-section-container").style

    playChoice.display = "none"
    playResults.display = "block"

    computerMove()
}

const computerMove = () => {
    const computerChoice = document.querySelector("#comp_choice").style
    const beforeComputerChoice = document.querySelector("#before_comp_choice").style

    beforeComputerChoice.display = "none"
    computerChoice.display = "block"

    setTimeout(didWinLose, 2000)
}

const didWinLose = () => {
    const playAgain = document.querySelector(".win-or-lose-mobile-container").style
    const playAgainMiddle = document.querySelector(".winning-message-middle-container").style

    playAgain.visibility = "visible"
    playAgainMiddle.display = "block"
}