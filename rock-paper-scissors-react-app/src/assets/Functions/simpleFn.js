import { store } from "../../redux/store"
import playerChoice from "../../redux/actions/playerChoice"
import result from "../../redux/actions/result"

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

export const playerMove = (state, playerChoiceId) => {
    const playResults = document.querySelector(".play-choosing-computer-section-container").style
    const playChoice = document.querySelector(".play-choosing-section-container").style

    store.dispatch(playerChoice(playerChoiceId))
    console.log(playerChoiceId)
    console.log(state)
    playChoice.display = "none"
    playResults.display = "block"
}

export const playerChoiceImgChild = (e, state) => {
    e.stopPropagation();
    const playerChoiceId = e.target.parentNode.offsetParent.id

    playerMove(state, playerChoiceId)
}

export const playerChoiceChild = (e, state) => {
    e.stopPropagation();
    const playerChoiceId = e.target.parentElement.id

    playerMove(state, playerChoiceId)
    console.log(state)
}

const choiceGenerator = () => {
    const choiceArray = ["paper", "rock", "scissors"]
    const choiceIndex = Math.floor(Math.random() * 3)
    const choice = choiceArray[choiceIndex]

    return choice
}

export const computerMove = () => {
    const choice = choiceGenerator()
        // store.dispatch(computerChoiceAct(choice))
    const computerChoice = document.querySelector("#comp_choice").style
    const beforeComputerChoice = document.querySelector("#before_comp_choice").style

    beforeComputerChoice.display = "none"
    computerChoice.display = "block"

    return choice

    // const result = gameResult(state)
}

export const gameResult = async(state) => {
    const computerPlay = state.computer.computerPlay
    const userPlay = state.player.userPlay
    let finalResult


    const checkResults = [{
            beats: "rock",
            loseTo: "scissors",
            itSelf: "paper"
        },
        {
            beats: "scissors",
            loseTo: "paper",
            itSelf: "rock"
        },
        {
            beats: "paper",
            loseTo: "rock",
            itSelf: "scissors"
        }
    ]

    for (let i = 0; i < checkResults.length; i++) {
        if (userPlay === checkResults[i].itSelf) {
            if (computerPlay === checkResults[i].beats) {
                finalResult = "YOU WIN"
                store.dispatch(result(finalResult))
            } else if (computerPlay === checkResults[i].loseTo) {
                finalResult = "YOU LOSE"
                store.dispatch(result(finalResult))
            } else if (computerPlay === checkResults[i].itSelf) {
                finalResult = "A DRAW"
                store.dispatch(result(finalResult))
            }
        }
    }
    didWinLose()
}

// const didWinLoseStateChange = (state) => {
//     gameResult(state)

//     setTimeout(didWinLose, 2000)
// }

const didWinLose = () => {
    const playAgain = document.querySelector(".win-or-lose-mobile-container")
    const playAgainMiddle = document.querySelector(".winning-message-middle-container").style

    playAgain.style.display = "block"
    playAgain.style.visibility = "visible"
    playAgainMiddle.display = "block"
}