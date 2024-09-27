import { createSlice } from "@reduxjs/toolkit";

// import { RootState } from ".";

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false
}


const user = createSlice({
    name: 'user',
    initialState,
    reducers: {}

})


export default user.reducer
