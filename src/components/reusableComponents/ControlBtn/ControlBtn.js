import React, { useEffect } from 'react';
import styles from './ControlBtn.module.scss';


const ControlBtn = ({ icon, path, request, setOptions, setCount }) => {

  let updatedOptions;
  const movePlayer = (path, request) => {
    fetch(path, {method: "post",headers: {
      'Content-Type': "application/json"
    }, body: JSON.stringify(request)}).then(res =>
      res.json()).then(async data => {
        //console.log(data)
        updatedOptions = await data
        console.log("updatedOptions: ", updatedOptions)
        setOptions(updatedOptions.data)
        setCount(updatedOptions.data.cooldown)
        return updatedOptions
    }).catch(err => {
      console.log(err)
      console.log("updatedOptions: ", updatedOptions)
    })
  }

  //useEffect((updatedOptions) => {
    //console.log("useEffect: ",updatedOptions)
    //setOptions(updatedOptions)
  //},[movePlayer])

  //console.log("icon: ", icon, "path: ", path, "request: ", request)
  return (
    <button
    className={styles.ControlBtn}
    onClick={() => movePlayer(path, request)}
     >{icon}</button>
  )
}

export default ControlBtn;
