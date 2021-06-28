const playerPath = (imgPath) => {
    return ({
        type: "PLAYER_PATH",
        payload: imgPath
    })
}

export default playerPath