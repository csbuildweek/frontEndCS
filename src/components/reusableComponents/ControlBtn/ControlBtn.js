import React from 'react';
import styles from './ControlBtn.module.scss';

const movePlayer = (path, direction) => {
  //const direc = JSON.stringify(direction)
  //console.log("direc: ", direc)
  console.log('path: ', path)
  console.log("direction: ", direction)
  fetch(path, {method: "post",headers: {
    'Content-Type': "application/json"
  }, body: JSON.stringify({"direction": direction})}).then(res => {
    console.log(res.data)
  }).catch(err => {
    console.log(err)
  })
}
const ControlBtn = ({ icon, path, direction }) => {
  //console.log("icon: ", icon, "path: ", path, "request: ", request)
  return (
    <button
    className={styles.ControlBtn}
    onClick={() => movePlayer(path, direction)}
     >{icon}</button>
  )
}

export default ControlBtn;
