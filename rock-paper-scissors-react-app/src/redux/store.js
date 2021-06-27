import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers/allReducers"
import { composeWithDevTools } from "redux-devtools-extension"
import { gameResult } from "../assets/Functions/simpleFn"




const choice = store => next => action => {
    if (action.type === "PLAYER_CHOICE") {
        if (action.payload === "player_paper") {
            next({ type: "PAPER" })
        } else if (action.payload === "player_scissors") {
            next({ type: "SCISSORS" })
        } else if (action.payload === "player_rock") {
            next({ type: "ROCK" })
        }
    } else if (action.type === "COMPUTER_CHOICE") {
        next(action)
    }
}

const composeWithTools = composeWithDevTools(applyMiddleware(choice))

export const store = createStore(reducer, undefined, composeWithTools)