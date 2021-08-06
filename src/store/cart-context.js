import React, { useContext } from 'react';

const defaultContextValue = {
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: item => {},
};

const CartContext = React.createContext(defaultContextValue);

export const useCartContext = () => useContext(CartContext);

export default CartContext;
