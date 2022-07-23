import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const CartOnContext = createContext();

export const CartContext = ({children}) =>{

    const [cart, setCart] = useState([])
    console.log(cart)

    const addToCart = (item) => {
        const index = cart.findIndex( prod => prod.id === item.id) 
        if(index===-1){
            setCart([
                ...cart,
                item
            ])
        }
        else{
            const quantityE = cart[index].quantity
            cart[index].quantity= quantityE + item.quantity
            setCart([...cart])
        }
    }
    const removeFromCart = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    }
    const clearCart = () => {
        setCart([]);
    }
    const onCart = (id) =>{
        return cart.reduce((contador,prodObject)=> contador += prodObject.quantity, 0)
    }

    return(
        <CartOnContext.Provider value={[cart, addToCart, removeFromCart, clearCart, onCart]}>
            {children}
        </CartOnContext.Provider>
    )
}