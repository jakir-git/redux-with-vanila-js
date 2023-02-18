// Initial state
const initialState = {
    value: 0,
}

// Create reducer function
function counterReducer( state = initialState, action ) {
    if ( action.type === "increnent" ) {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if( action.type === "decrenent" ) {
        return {
            ...state,
            value: state.value - 1,
        };
    } else{
        return state;
    }
}

// Create store
const store = Redux.createStore(counterReducer);