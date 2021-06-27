const playerChoice = (userPlay) => {
    return ({
        type: "PLAYER_CHOICE",
        payload: userPlay
    })
}

export default playerChoice