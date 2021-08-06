import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import CartIcon from './CartIcon';
import { useCartContext } from '../../../store/cart-context';

const HeaderCartButton = props => {
  const [getBtnBumpClass, setGetBtnBumpClass] = useState(false);
  const cartCtx = useCartContext();
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);
  const btnClasses = `${styles.button} ${getBtnBumpClass ? styles.bump : ''}`;
  useEffect(() => {
    if (items.length === 0) {
      return '';
    }
    setGetBtnBumpClass(true);
    const timer = setTimeout(() => {
      setGetBtnBumpClass(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
