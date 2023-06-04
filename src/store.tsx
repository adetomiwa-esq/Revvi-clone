import {configureStore} from '@reduxjs/toolkit';
import NavbarReducer from '../src/Components/Features/NavBox/NavSlice'

export const store = configureStore({
    reducer: {
        reponsiveNav: NavbarReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type RootType = typeof store.dispatch