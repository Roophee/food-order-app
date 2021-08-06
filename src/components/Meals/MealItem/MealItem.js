import React from 'react';
import styles from './style.module.css';
import MealItemForm from '../MealItemForm';
import { useCartContext } from '../../../store/cart-context';

const MealItem = props => {
  const { price, description, name } = props;
  const priceString = `$${price.toFixed(2)}`;
  const cartCtx = useCartContext();
  const addToCardHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceString}</div>
      </div>
      <MealItemForm onAddToCart={addToCardHandler} />
    </li>
  );
};

export default MealItem;
