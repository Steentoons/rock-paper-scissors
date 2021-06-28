const result = (finalResult) => {
    return ({
        type: "GAME_RESULT",
        payload: finalResult
    })
}

export default result