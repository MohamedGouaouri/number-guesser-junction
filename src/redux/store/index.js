/* eslint-disable no-unused-expressions */
// import { createStore } from 'redux'
// import { DECEMENT_COUNTER_TYPE, INCREMENT_COUNTER_TYPE } from '../actions';

import { configureStore, createSlice } from "@reduxjs/toolkit";



// const reducer = (state = { counter: 0 }, action) => {
//     switch (action.type) {
//         case INCREMENT_COUNTER_TYPE:
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }

//         case DECEMENT_COUNTER_TYPE:
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }

//         default:
//             return state
//     }
// }

// const store = createStore(
//     reducer, /* preloadedState, */
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store
const slice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increment(state, action) {
            state.counter++
        },
        decrement(state, action) {
            state.counter--
        }
    },

})

export const actions = slice.actions


export const store = configureStore({
    reducer: slice.reducer
})
