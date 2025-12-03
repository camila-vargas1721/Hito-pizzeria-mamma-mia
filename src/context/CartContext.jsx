import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();
const calculateTotal = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.count), 0);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === pizza.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === pizza.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                return [...prevCart, { ...pizza, count: 1 }];
            }
        });
    };
    const incrementItem = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };
    const decrementItem = (id) => {
        setCart(prevCart =>
            prevCart.reduce((acc, item) => {
                if (item.id === id) {
                    const newCount = item.count - 1;
                    if (newCount > 0) {
                        acc.push({ ...item, count: newCount });
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, [])
        );
    };

    const total = calculateTotal(cart);

    const contextValue = {
        cart,
        total,
        addToCart,
        incrementItem,
        decrementItem,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);