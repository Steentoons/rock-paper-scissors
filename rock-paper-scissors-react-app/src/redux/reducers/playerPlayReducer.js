export const initialState = {
    eventElement: {
        playerPath: "",
        computerPath: ""
    },
    userPlay: ""
}

const playerPlayReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PAPER":
            return ({
                ...state,
                userPlay: "paper"
            })
        case "SCISSORS":
            return ({...state,
                userPlay: "scissors"
            })

        case "ROCK":
            return ({...state,
                userPlay: "rock"
            })
        case "PLAYER_PATH":
            return ({...state,
                eventElement: {
                    ...state.eventElement,
                    playerPath: action.payload
                }
            })
        case "COMPUTER_PATH":
            return ({...state,
                eventElement: {
                    ...state.eventElement,
                    computerPath: action.payload
                }
            })
        default:
            return state
    }
}

export default playerPlayReducer