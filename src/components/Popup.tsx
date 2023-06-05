import React from 'react';
import styles from '../styles/Popup.module.css';

const Popup = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles['popup-overlay']}>
      <div className={styles['popup-content']}>
        {children}
        <button className={styles['close-button']} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
