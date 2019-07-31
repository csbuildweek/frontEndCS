import React from 'react';

import InventoryItem from './InventoryItem.js';
import styles from './Inventory.module.scss';

const Inventory = ({ inventory, setDrop, drop }) => {


  console.log("inventory: ", inventory)
  console.log(inventory.messages)
  return (
    <section className={styles.InventoryWrapper}>
    <h2>Inventory:</h2>
    <p>Name: {inventory.name}</p>
    <p>Encumbrance: {inventory.encumbrance}</p>
    <p>Gold: {inventory.gold}</p>
    <p>Strength: {inventory.strength}</p>
    <p>Speed: {inventory.speed}</p>
    {inventory.messages && inventory.messages.map((message, index) => {
      return (
      <p key={index}>{message}</p>
      )})}
    {inventory.inventory && inventory.inventory.map((inv, index) => {
      return (
        <InventoryItem
        key={index}
        index={index}
        inv={inv}
        setDrop={setDrop}
        drop={drop}
        />)
    })}
    </section>
  )
}

export default Inventory;
