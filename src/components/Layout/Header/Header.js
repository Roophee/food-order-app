import React from 'react';
import styles from './style.module.css';
import mealsImage from '../../../assests/meals.jpg';
import HeaderCartButton from '../HeaderCartButton';

const Header = props => (
  <>
    <header className={styles.header}>
      <h1>React Meals</h1>
      <HeaderCartButton onShowCart={props.onShowCart} />
    </header>
    <div className={styles['main-image']}>
      <img src={mealsImage} alt="meals" />
    </div>
  </>
);

export default Header;
