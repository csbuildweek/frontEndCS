import React, { useState } from 'react';
import ControlBtn from '../reusableComponents/ControlBtn/ControlBtn.js';
//import { GiDirectionSign } from 'react-icons/gi';
import { FiCornerRightUp, FiCornerRightDown, FiCornerUpRight, FiCornerUpLeft } from 'react-icons/fi';
import styles from './Controls.module.scss';

const icons = [
  {
    id: 1,
    icon: <FiCornerRightUp className={styles.icon} />,
    path: "https://lambda-flask-pirate.herokuapp.com/move",
    request: {
      "direction": "n"
    }
  },
  {
    id: 2,
    icon: <FiCornerRightDown className={styles.icon} />,
    path: "https://lambda-flask-pirate.herokuapp.com/move",
    request: {
      "direction": "s"
    }
  },
  {
    id: 3,
    icon: <FiCornerUpRight className={styles.icon} />,
    path: "https://lambda-flask-pirate.herokuapp.com/move",
    request: {
      "direction": "e"
    }
  },
  {
    id: 4,
    icon: <FiCornerUpLeft className={styles.icon} />,
    path: "https://lambda-flask-pirate.herokuapp.com/move",
    request: {
      "direction": "w"
    }
  },
]


const Controls = ({ setOptions, setCount }) => {
  //const [direction, setDirection] = useState("")
  const [message, setMessage] = useState("")
  //const [directionURL, setDirectionURL] = useState("")
  const [navOptions] = useState(icons)

  //const movePlayer = (direction) => {
    //let message;
    //let directionURL;
    //if (direction.toLowerCase() !== "n" || "s" || "e" || "w") {
      //return message = "Direction must be n, s, e, w!"
    //} else if (direction.toLowerCase() === "n") {
      //return directionURL = ""
    //} else if (direction.toLowerCase() === "s") {
      //return directionURL = ""
    //} else if (direction.toLowerCase() === "e") {
      //return directionURL = ""
    //} else if (direction.toLowerCase() === "w") {
      //return directionURL = ""
    //}
    //setMessage(message)
    ////setDirectionURL(directionURL)
  //}
  return (
    <section className={styles.ButtonWrapper}>
    {navOptions.map(icon => {
      //console.log(icon)
      return (
        <ControlBtn
        key={icon.id}
        icon={icon.icon}
        path={icon.path}
        request={icon.request}
        setOptions={setOptions}
        setCount={setCount}
        />
      )
    })}
    {message && <p>{message}</p>}
    </section>
  )
}

export default Controls;
