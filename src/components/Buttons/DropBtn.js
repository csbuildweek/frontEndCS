import React from 'react';
import {GiTrashCan} from 'react-icons/gi';

import styles from './DropBtn.module.scss';

const DropBtn = ({drop}) => {

  const dropItem = (drop) => {
    console.log("Drop an Item")
    console.log(drop)
    fetch("https://lambda-flask-pirate.herokuapp.com/drop", { method: "post", headers: {
      'Content-Type': "application/json"
    }, body: JSON.stringify({"name": drop}) }).then(res => res.json()).then(async data => {
      console.log(data)
    }).catch(err => console.log(err))
  }

  return (
    <button
    className={styles.DropBtn}
    onClick={() => dropItem(drop)}
      >
      <span>
        Drop Item
        <GiTrashCan className={styles.icon} />
      </span>
    </button>
  );
};

export default DropBtn;
