import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";

import user from './user';

// const reducer = combineReducers({
//     user,
// })

const store = configureStore({
    reducer : {
        user,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;