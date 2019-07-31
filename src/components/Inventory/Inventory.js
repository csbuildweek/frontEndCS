import React from 'react';

import styles from './Inventory.module.scss';

const Inventory = ({ inventory }) => {
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
    </section>
  )
}

export default Inventory;
