import { createContext } from "react";
import React from 'react'
import useInitialState from "../hooks/useInitialState";

export const AppContext = createContext()


export const AppProvider = ({children}) => {
    const {State, addToCart, removeItem} = useInitialState();
    return (
        <AppContext.Provider value={
            {State, addToCart, removeItem}
        }>
            {children}
        </AppContext.Provider>
    )
}
