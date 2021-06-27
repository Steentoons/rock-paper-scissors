import playerPlayReducer from "./playerPlayReducer";
import computerPlayReducer from "./computerPlayReducer"
import { combineReducers } from "redux"

export default combineReducers({ player: playerPlayReducer, computer: computerPlayReducer })