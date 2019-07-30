import React from 'react';
import styles from './ControlBtn.module.scss';

const movePlayer = (path, request) => {
  //const direc = JSON.stringify(direction)
  //console.log("direc: ", direc)
  console.log('path: ', path)
  console.log("direction: ", request)
  fetch(path, {method: "post",headers: {
    'Content-Type': "application/json"
  }, body: JSON.stringify(request)}).then(res =>
    res.json()).then(data => {
      console.log(data)
  }).catch(err => {
    console.log(err)
  })
}
const ControlBtn = ({ icon, path, request }) => {
  //console.log("icon: ", icon, "path: ", path, "request: ", request)
  return (
    <button
    className={styles.ControlBtn}
    onClick={() => movePlayer(path, request)}
     >{icon}</button>
  )
}

export default ControlBtn;
