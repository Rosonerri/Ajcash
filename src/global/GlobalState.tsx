import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {} || null,
    toggle: false,
    bar: false,
    mobile: false

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
        },
        mobiled: (state: any) => {
            state.mobile = true
        },
        changedMobile: (state: any) => {
            state.mobile = false
        }

    }
});

export const { mainUser, logOut, changedToggle, toggled, bared, changedBar, changedMobile, mobiled } = GlobalState.actions

export default GlobalState.reducer