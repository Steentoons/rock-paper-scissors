const computerChoiceAct = (choice) => {
    return ({
        type: "COMPUTER_CHOICE",
        payload: choice
    })
}

export default computerChoiceAct