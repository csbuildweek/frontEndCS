import React from 'react';
import styles from './CommandBtn.module.scss';

const CommandBtn = ({ icon, path, name, options, setOptions, picked, operation }) => {

  let updatedName;
  //const pickUp = (picked) => {
    //console.log("picked: ", picked)
    //fetch(path, {method: "post", headers: {
      //'Content-Type': "application/json"
    //}, body: JSON.stringify({name: picked})}).then(res => res.json()).then(async data => {
      //console.log(data)
      //updatedName = await data
      //console.log(updatedName.data)
    //})
  //}

  return (
    <button
    className={styles.CommandBtn}
    onClick={(e) => operation(picked)}
    >
    <span>{name}: {icon}</span>
    </button>
  )
}

export default CommandBtn;
