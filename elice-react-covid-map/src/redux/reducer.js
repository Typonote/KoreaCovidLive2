const initState = {
    theme: "light"
}

const Reducer = (state = initState, action) => {
    switch(action.type) {
        case "CHANGE_TYPE":
            return {
                theme: action.theme
            }
        default:
            return state;
    }
}

export default Reducer;