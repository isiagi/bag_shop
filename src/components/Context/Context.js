import React, {createContext, useState} from 'react'

export const AppContext = createContext()

export function Context(props) {
    const [cartItems, setCartItems] = useState([])
    
    return (
        <AppContext.Provider value={[cartItems, setCartItems]}>
            {props.children}
        </AppContext.Provider>
    )
}
