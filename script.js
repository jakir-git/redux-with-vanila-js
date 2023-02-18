// Select dom elements
const displayEl     = document.getElementById('show-value');
const incrementEl   = document.getElementById('btn-increment');
const decrementEl   = document.getElementById('btn-decrement');

// Initial state
const initialState = {
    value: 0,
}

// Create reducer function
function counterReducer( state = initialState, action ) {
    if ( action.type === "increment" ) {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if( action.type === "decrement" ) {
        return {
            ...state,
            value: state.value == 0 ? 0 : state.value - 1,
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
    store.dispatch({
        type: "increment",
    })
})

decrementEl.addEventListener('click', ()=> {
    store.dispatch({
        type: "decrement",
    })
})
