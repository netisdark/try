import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  const addItem = (key) => {
    setCartItems(prev => ({ ...prev, [key]: 1 }));
  };

  const incrementItem = (key) => {
    setCartItems(prev => ({ ...prev, [key]: prev[key] + 1 }));
  };

  const decrementItem = (key) => {
    setCartItems(prev => {
      const updatedCount = prev[key] - 1;
      if (updatedCount <= 0) {
        const { [key]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: updatedCount };
    });
  };

  const totalQuantity = Object.values(cartItems).reduce((acc, val) => acc + val, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItem, incrementItem, decrementItem, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
