import React, {useState, useEffect} from 'react';

import Item from './Item.js';

import styles from './Display.module.scss';

const Display = ({ options, count, setCount }) => {
  //const [count, setCount] = useState(options.cooldown)
  //const countDown = (cooldown) => {
    //let count;
    //for (let i = cooldown; i >= 0; --i) {
      //count += cooldown;
    //}
  //}

  useEffect(() => {
    let interval = null;
    if (count) {
      interval = setInterval(() => {
        setCount(count => count - 1)
      }, 1000)
    } else if (count === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
   //countDown(options.cooldown)
    //setCount(options.cooldown)
  }, [count])

  return (
    <section className={styles.OptionsWrapper}>
    {console.log("options: ", options)}
    <p>{count}</p>
    <p>CD: {options.cooldown}</p>
    <p>Description: {options.description}</p>
    <p>Coordinates: {options.coordinates}</p>
    <p>Elevation: {options.elevation}</p>
    <p>Exits: {options.exits}</p>
    <p>RoomID: {options.room_id}</p>
    <p>Terrain: {options.terrain}</p>
    <p>Title: {options.title}</p>
    {options.players && options.players.map((player, index) => {
      return (
        <p key={index}>Players: {player}</p>
      )
    })}
    {options.items &&  options.items.map((item, index) => {
      return (
        <div className={styles.ItemContainer} key={index}>
        <Item
        item={item}
        />
        </div>
      )
    })}
    {options.messages && options.messages.map((message, index) => {
      return (
        <p key={index}>Message(s): {message}</p>
      )
    })}
    </section>
  )
}

export default Display;
