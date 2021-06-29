const initialState = {
    computerPlay: "",
    userScore: 0,
    gameStatus: ""
}

const computerPlayReducer = (state = initialState, action) => {
    switch (action.type) {
        case "COMPUTER_CHOICE":
            return ({
                ...state,
                computerPlay: action.payload
            })
        case "RESET_COMP_PLAY":
            return ({
                ...state,
                computerPlay: "",
                gameStatus: ""
            })
        case "GAME_RESULT":
            if (action.payload === "YOU WIN") {
                return ({
                    ...state,
                    gameStatus: action.payload,
                    userScore: state.userScore + 1
                })
            } else if (action.payload === "YOU LOSE") {
                return ({
                    ...state,
                    gameStatus: action.payload,
                    userScore: state.userScore - 1
                })
            } else if (action.payload === "A DRAW") {
                return ({
                    ...state,
                    gameStatus: action.payload
                })
            }
        default:
            return state
    }
}

export default computerPlayReducer