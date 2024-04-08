import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {} || null,
    toggle: false,
    bar: false
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
        },
        bared: (state: any) => {
            state.bar = true
        },
        changedBar: (state: any) => {
            state.bar = false
        }
    }
});

export const { mainUser, logOut, changedToggle, toggled, bared, changedBar } = GlobalState.actions

export default GlobalState.reducer