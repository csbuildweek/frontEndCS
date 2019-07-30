import React from 'react';
import styles from './ControlBtn.module.scss';

const movePlayer = (path, request) => {
  //console.log("request: ", request)
  fetch(path, {request} ).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
const ControlBtn = ({ icon, path, request }) => {
  //console.log("icon: ", icon, "path: ", path, "request: ", request)
  return (
    <button
    className={styles.ControlBtn}
    onClick={movePlayer}
     >{icon}</button>
  )
}

export default ControlBtn;
