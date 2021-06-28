import { store } from "../../redux/store"
import playerChoice from "../../redux/actions/playerChoice"
import result from "../../redux/actions/result"
import playerPath from "../../redux/actions/playerPath"
import computerPath from "../../redux/actions/computerPath"

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

export const playerMove = (state, playerChoiceId, imgPath) => {
    const playResults = document.querySelector(".play-choosing-computer-section-container").style
    const playChoice = document.querySelector(".play-choosing-section-container").style

    store.dispatch(playerChoice(playerChoiceId))
    store.dispatch(playerPath(imgPath))
    playChoice.display = "none"
    playResults.display = "block"
}

export const playerChoiceImgChild = (e, state) => {
    e.stopPropagation();
    const playerChoiceId = e.target.parentNode.offsetParent.id
    const imgPath = e.target.src

    playerMove(state, playerChoiceId, imgPath)
}

export const playerChoiceChild = (e, state) => {
    e.stopPropagation();
    const playerChoiceId = e.target.parentElement.id
    const imgPath = e.target.parentElement.lastChild.firstChild.src

    playerMove(state, playerChoiceId, imgPath)
}

const choiceGenerator = () => {
    const choiceArray = ["paper", "rock", "scissors"]
    const choiceIndex = Math.floor(Math.random() * 3)
    const choice = choiceArray[choiceIndex]

    return choice
}

const getCompImgPath = (choice) => {
    if (choice === "paper") {
        return "http://localhost:3000/static/media/icon-paper.8b57a6b1.svg"
    } else if (choice === "rock") {
        return "http://localhost:3000/static/media/icon-rock.476e90a9.svg"
    } else if (choice === "scissors") {
        return "http://localhost:3000/static/media/icon-scissors.3b1a5d7e.svg"
    }
}

export const computerMove = () => {
    const choice = choiceGenerator()
    const compImgPath = getCompImgPath(choice)
    store.dispatch(computerPath(compImgPath))
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