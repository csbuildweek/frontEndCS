import React, { useState } from 'react';
import {GiWeight} from 'react-icons/gi';

import styles from './BalanceBtn.module.scss';

const BalanceBtn = () => {
  const [balance, setBalance] = useState("")

  const getBalance = () => {
    let message;
    fetch("https://lambda-flask-pirate.herokuapp.com/get_balance", { method: "get", headers: {
      'Content-Type': "application/json",
    },  }).then(res => res.json()).then(async data => {
      message = await data.data.messages[0]
      //console.log(data.data.cooldown)
      console.log(data)
      //return message = await data.messages[0]
      setBalance(message)
    }).catch(err => console.log(err))
  }

  return (
    <button
    className={styles.BalanceBtn}
    onClick={() => getBalance()}
      >
      <span>
    Get Balance {balance ? <span>{balance}</span> : null}
        <GiWeight className={styles.icon} />
      </span>
    </button>
  );
};

export default BalanceBtn;
