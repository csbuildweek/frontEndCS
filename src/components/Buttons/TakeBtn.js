import React from 'react'
import { GiCardPlay } from 'react-icons/gi';

import styles from './TakeBtn.module.scss'


const TakeBtn = ({picked}) => {
  let updatedName;

    const pickUp = (picked) => {
      //console.log("picked: ", picked)
      fetch("https://lambda-flask-pirate.herokuapp.com/take", {method: "post", headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify({name: picked})}).then(res => res.json()).then(async data => {
        console.log(data)
        updatedName = await data
        console.log(updatedName.data)
      })
  }

  return (
    <div>
    <button className={styles.TakeBtn}
    onClick={() => pickUp(picked)}
    ><span>Pick Up<GiCardPlay className={styles.icon} /></span></button>
    </div>
  )
}

export default TakeBtn;
