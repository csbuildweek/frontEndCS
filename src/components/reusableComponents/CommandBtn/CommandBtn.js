import React from 'react';
import styles from './CommandBtn.module.scss';

const CommandBtn = ({ icon, path, name }) => {

  const pickUp = () => {
    console.log("pick up")
  }

  return (
    <button
    className={styles.CommandBtn}
    onClick={() => pickUp()}
    >
    <span>{name}: {icon}</span>
    </button>
  )
}

export default CommandBtn;
