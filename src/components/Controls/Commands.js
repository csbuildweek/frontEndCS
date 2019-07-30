import React, {useState} from 'react';
import { GiCardPlay, GiTrashCan, GiLookAt, GiCardExchange, GiPerson } from 'react-icons/gi';

import CommandBtn from '../reusableComponents/CommandBtn/CommandBtn.js';
import styles from './Commands.module.scss';

const commandOptions = [
  {
    id: 1,
    icon: <GiCardPlay className={styles.icon} />,
    path: "https://lambda-flask-pirate.herokuapp.com/take",
    name: "Pick up",
  },
  {
    id: 2,
    icon: <GiTrashCan className={styles.icon} />,
    path: "https://lambda-flask-pirate.herokuapp.com/drop",
    name: "Drop",
  },
  {
    id: 3,
    icon: <GiLookAt className={styles.icon} />,
    path: "https://lambda-flask-pirate.herokuapp.com/status",
    name: "Examine",
  },
  {
    id: 4,
    icon: <GiCardExchange className={styles.icon} />,
    path: "https://lambda-flask-pirate.herokuapp.com/sell",
    name: "Sell",
  },
  {
    id: 5,
    icon: <GiPerson className={styles.icon} />,
    path: "https://lambda-flask-pirate.herokuapp.com/change_name",
    name: "Change Name",
  }
]

const Commands = () => {
  const [CMD, setCMD] = useState(commandOptions)
  return (
    <section className={styles.CommandBtnWrapper}>
    {CMD.map(icon => {
      return (
        <CommandBtn
        key={icon.id}
        icon={icon.icon}
        path={icon.path}
        name={icon.name}
        />
      )
    })}
    </section>
  )
}

export default Commands;
