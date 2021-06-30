import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers/allReducers"
import { composeWithDevTools } from "redux-devtools-extension"
import { saveState } from "../assets/Functions/simpleFn"
import throttle from "lodash/throttle"




const choice = store => next => action => {
    if (action.type === "PLAYER_CHOICE") {
        if (action.payload === "player_paper") {
            next({ type: "PAPER" })
        } else if (action.payload === "player_scissors") {
            next({ type: "SCISSORS" })
        } else if (action.payload === "player_rock") {
            next({ type: "ROCK" })
        }
    } else {
        next(action)
    }

}

const composeWithTools = composeWithDevTools(applyMiddleware(choice))

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {}
}

const persistedState = loadState()

export const store = createStore(reducer, persistedState, composeWithTools)

store.subscribe(throttle(() => {
    saveState({
        computer: {
            userScore: store.getState().computer.userScore
        }
    })
}), 1000)