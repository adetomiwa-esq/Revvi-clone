import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobileNavDisplay: false
}

const NavbarSlice = createSlice({
    name: 'NavSlice',
    initialState,
    reducers: {
        toggleMobileNav: (state) => {
            state.mobileNavDisplay = !state.mobileNavDisplay
        },
        removeMobileNav: (state) => {
            state.mobileNavDisplay = false
        }
    }
})

export const {toggleMobileNav, removeMobileNav} = NavbarSlice.actions

export default NavbarSlice.reducer