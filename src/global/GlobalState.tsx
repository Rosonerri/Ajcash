import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {} || null,
    toggle: false
}

const GlobalState = createSlice({
    name: "second",
    initialState,
    reducers: {
        mainUser: (state: any, { payload }) => {
            state.user = payload
        },
        logOut: (state: any) => {
            state.user = null
        },
        toggled: (state: any) => {
            state.toggle = true
        },
        changedToggle: (state: any) => {
            state.toggle = false
        }
    }
});

export const { mainUser, logOut, changedToggle, toggled } = GlobalState.actions

export default GlobalState.reducer