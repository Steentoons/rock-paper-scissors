import { store } from "../../redux/store"
import playerChoice from "../../redux/actions/playerChoice"
import computerChoiceAct from "../../redux/actions/computerChoiceAct"
import { state } from "../../components/PlayChoosingSection"

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
                alert("User Wins")
            } else if (computerPlay === checkResults[i].loseTo) {
                alert("User Loses")
            } else if (computerPlay === checkResults[i].itSelf) {
                alert("Its a draw")
            }
        }
    }

    // const beats = ""
    // const loseTo = ""
    // const itself = ""

    // switch (state.computer.computerPlay) {
    //     case "paper":
    //         beats = "rock"
    //         loseTo = "scissors"
    //         itself = "paper"

    //         break
    //     case "scissors":
    //         beats = "rock"
    //         loseTo = "scissors"
    //         itself = "paper"

    //         break
    //     case "rock":
    //         beats = "scissors"
    //         loseTo = "paper"
    //         itself = "rock"

    //         break
    //     default:
    //         return
    // }

    // alert(loseTo)

    // if (state.computerPlay === beats) {
    //     alert("You won")
    //     return "win"
    // } else if (state.computerPlay === loseTo) {
    //     alert("You Lost")
    //     return "lost"
    // } else if (state.computerPlay === itself) {
    //     alert("Its a draw")
    //     return "draw"
    // }
}

// const didWinLoseStateChange = (state) => {
//     gameResult(state)

//     setTimeout(didWinLose, 2000)
// }

const didWinLose = () => {
    const playAgain = document.querySelector(".win-or-lose-mobile-container").style
    const playAgainMiddle = document.querySelector(".winning-message-middle-container").style

    playAgain.visibility = "visible"
    playAgainMiddle.display = "block"
}