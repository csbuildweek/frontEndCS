import React, { useEffect } from 'react'
import { GiPrayerBeads} from 'react-icons/gi';

import styles from './ShrineBtn.module.scss';

const ShrineBtn = () => {

  let updatedInventory;
  const pray = () => {
    fetch("https://lambda-flask-pirate.herokuapp.com/pray", { method: "post", headers: {
      'Content-Type': "application/json"
    } }).then(res => res.json()).then(async data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <button
    className={styles.ShrineBtn}
    onClick={() => pray()}
      ><span>Pray<GiPrayerBeads className={styles.icon}/></span></button>
  )
}

export default ShrineBtn;
