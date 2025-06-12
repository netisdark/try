import React, { createContext, useContext, useState } from 'react';
import menuItems from '../MenuItems';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addItem = (itemKey) => {
    setCartItems(prev => ({
      ...prev,
      [itemKey]: (prev[itemKey] || 0) + 1
    }));
  };

  const incrementItem = (itemKey) => {
    setCartItems(prev => ({
      ...prev,
      [itemKey]: prev[itemKey] + 1
    }));
  };

  const decrementItem = (itemKey) => {
    setCartItems(prev => {
      const newCount = prev[itemKey] - 1;
      if (newCount <= 0) {
        const newCart = { ...prev };
        delete newCart[itemKey];
        return newCart;
      }
      return {
        ...prev,
        [itemKey]: newCount
      };
    });
  };

  const getItemDetails = (itemKey) => {
    const [category, index] = itemKey.split('-');
    const categoryObj = menuItems.find(cat => cat.category === category);
    return categoryObj ? categoryObj.items[parseInt(index)] : null;
  };

  const totalQuantity = Object.values(cartItems).reduce((sum, count) => sum + count, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addItem,
      incrementItem,
      decrementItem,
      getItemDetails,
      totalQuantity, 
    }}>
      {children}
    </CartContext.Provider>
  );

};

export const useCart = () => useContext(CartContext);
