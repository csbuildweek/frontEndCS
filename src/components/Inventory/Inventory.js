import React from 'react';

import InventoryItem from './InventoryItem.js';
import styles from './Inventory.module.scss';

const Inventory = ({ inventory, setDrop, drop }) => {


  console.log("inventory: ", inventory)
  console.log(inventory.messages)
  return (
    <section className={styles.InventoryWrapper}>
    <h2 className={styles.header}>Inventory:</h2>
    <p className={styles.playerName}>Name: {inventory.name}</p>
    <p className={styles.encumbrance}>Encumbrance: {inventory.encumbrance}</p>
    <p className={styles.gold}>Gold: {inventory.gold}</p>
    <p className={styles.strength}>Strength: {inventory.strength}</p>
    <p className={styles.speed}>Speed: {inventory.speed}</p>
    <p className={styles.has_mined}>Has Mined: {`${inventory.has_mined}`}</p>
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
