import React, { context, useState } from "react"

export const CartOnContext = React.createContext()

export const CartContext = ({children}) =>{

    const [cart, setCart] = useState([])
    console.log(cart)

    const addToCart = (item) => {
        cart.push(item)
    }
    const removeFromCart = (id) => {
        cart.delete(id)
    }
    const clearCart = () => {}
    const onCart = (id) =>{}

    return(
        <CartOnContext.Provider value={[cart, addToCart]}>
            {children}
        </CartOnContext.Provider>
    )
}