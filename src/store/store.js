import { configureStore } from "@reduxjs/toolkit"; // configureStore simplifies the store creation, which was a hard lifting task in former redux -> JS library for state management
import counterReducer from "../features/CounterSlice"; // Set of reducers -> functions which define how application's state changes in respond to actions

const store = configureStore({
    reducer: { // The created global store containing the globalstate, only mutates by registered reducers which are known to the store
        counter: counterReducer // default export from @/src/features/CounterSlice.jsx
    }
})

export default store;