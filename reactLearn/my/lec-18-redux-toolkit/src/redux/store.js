import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
}) // configureStore is a function that takes an object as an argument and returns a store object

// steps of redux
// 1. create store
// 2. wrap app compo under Provider
// 3. create slice
// 4. register reducer in store