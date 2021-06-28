export const initialState = {
    eventElement: {},
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
        default:
            return state
    }
}

export default playerPlayReducer