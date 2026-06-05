import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(i => i.id === product.id);
            if (existing) {
                return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const increaseQty = (item) => {
        setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    };

    const decreaseQty = (item) => {
        if (item.quantity === 1) {
            deleteItem(item.id);
            return;
        }
        setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i));
    };

    const deleteItem = (id) => {
        setCartItems(prev => prev.filter(i => i.id !== id));
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{ cartItems, cartCount, total, addToCart, increaseQty, decreaseQty, deleteItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
