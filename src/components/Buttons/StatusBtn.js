import React, { useEffect } from 'react'
import { GiSwapBag } from 'react-icons/gi';

import styles from './StatusBtn.module.scss';

const StatusBtn = ({ inventory, setInventory}) => {

  let updatedInventory;
  const checkInventory = () => {
    console.log('Checking Inventory...')
    fetch("https://lambda-flask-pirate.herokuapp.com/status", { method: "post", headers: {
      'Content-Type': "application/json"
    } }).then(res => res.json()).then(async data => {
      console.log(data)
      updatedInventory = await data;
      console.log("upInvent: ", updatedInventory.data)
      setInventory(updatedInventory.data)
      console.log(inventory)
      //return updatedInventory;
    })
    //setInventory(updatedInventory)
    //console.log(inventory)
  }

  //useEffect(() => {
    //setInventory(updatedInventory)
  //}, [updatedInventory])

  return (
    <button
    className={styles.StatusBtn}
    onClick={() => checkInventory()}
      ><span>Inventory<GiSwapBag className={styles.icon}/></span></button>
  )
}

export default StatusBtn;
