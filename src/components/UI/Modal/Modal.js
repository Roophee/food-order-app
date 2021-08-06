import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.css';

const Backdrop = props => (
  <div
    role="button"
    tabIndex="0"
    className={styles.backdrop}
    onClick={props.onClose}
    onKeyDown={props.onClose}
  />
);

const ModalOverlay = props => (
  <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div>
);
const portalElement = document.getElementById('overlays');

const Modal = props => (
  <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </>
);

export default Modal;
