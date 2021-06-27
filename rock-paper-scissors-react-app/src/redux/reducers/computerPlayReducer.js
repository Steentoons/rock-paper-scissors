const computerPlayReducer = (state = {}, action) => {
    switch (action.type) {
        case "COMPUTER_CHOICE":
            return ({
                ...state,
                computerPlay: action.payload
            })
        default:
            return state
    }
}

export default computerPlayReducer