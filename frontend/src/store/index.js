import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postSlice from './postSlice.js'

const store = configureStore(
    {
        reducer: {
            post: postSlice.reducer,
        },
    },
    applyMiddleware(thunk)
);

export default store;