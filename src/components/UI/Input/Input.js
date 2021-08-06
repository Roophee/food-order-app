import React from 'react';
import styles from './style.module.css';

const Input = React.forwardRef((props, ref) => {
  const { label, input } = props;
  const { id } = props.input;
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
