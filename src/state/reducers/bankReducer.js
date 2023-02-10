const initialState = 0;

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            if(action.payload <= state)
            return state - action.payload
            else 
            throw('Can not withdraw!')
        default:
            return state
    }
}

export default reducer;