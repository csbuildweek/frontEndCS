import React from 'react';
import styles from './ControlBtn.module.scss';

const ControlBtn = ({ icon, directionURL }) => {
  console.log("icon: ", icon)
  return (
  <button className={styles.ControlBtn}>{icon}</button>
  )
}

export default ControlBtn;
