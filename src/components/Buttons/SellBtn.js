import React from 'react';
import {GiSellCard} from 'react-icons/gi';

import styles from './SellBtn.module.scss';

const SellBtn = ({drop}) => {
  //let ItmToSell;
  const sellItem = (drop) => {
    console.log(drop)
    fetch("https://lambda-flask-pirate.herokuapp.com/sell", { method: "post", headers: {
      'Content-Type': "application/json"
    }, body: JSON.stringify({"name": drop, "confirm": "yes"}) }).then(res => res.json()).then(async data => {
      console.log(data)
      //ItmToSell = await data
    }).catch(err => console.log(err))
  }
  return (
    <button
    className={styles.SellBtn}
    onClick={() => sellItem(drop)}
      >
      <span>
        Sell: <GiSellCard className={styles.icon} />
      </span>
    </button>
  );
};

export default SellBtn;


