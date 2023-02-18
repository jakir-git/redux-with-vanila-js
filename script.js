// Select dom elements
const displayEl     = document.getElementById('show-value');
const incrementEl   = document.getElementById('btn-increment');
const decrementEl   = document.getElementById('btn-decrement');

// Initial state
const initialState = {
    value: 0,
}

// action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}

// Create reducer function
function counterReducer( state = initialState, action ) {
    if ( action.type === "increment" ) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if( action.type === "decrement" ) {
        return {
            ...state,
            value: state.value == 0 ? 0 : state.value - action.payload,
        };
    } else{
        return state;
    }
}

// Create store
const store = Redux.createStore(counterReducer);

// Render element
const render = () => {
    const state         = store.getState();
    displayEl.innerText = state.value;
    if(state.value == 0){
        decrementEl.style.display = "none";
    }else{
        decrementEl.style.display = "block";
    }
}

// Update UI initially
render();

// Subscribe store
store.subscribe(render)

// Button click listeners
incrementEl.addEventListener('click', ()=> {
    store.dispatch(increment(5));
})

decrementEl.addEventListener('click', ()=> {
    store.dispatch(decrement(5));
})
