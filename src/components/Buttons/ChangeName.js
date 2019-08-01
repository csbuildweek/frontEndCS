import React, {useState} from 'react';
import {GiPerson} from 'react-icons/gi';

import styles from './ChangeName.module.scss';

const ChangeName = ({ newName, setNewName }) => {
  const [toggle, setToggle] = useState(false)


  const submitNameChange = (newName) => {
    console.log("new name: ", newName)
    fetch("https://lambda-flask-pirate.herokuapp.com/change_name", { method: "post", headers: {
      'Content-Type': "application/json"
    }, body: JSON.stringify({"name": newName}) }).then(res => res.json()).then(async data => {
      console.log(data)
    }).catch(err => console.log(err))
    setToggle(false)
  }


  return (
    <div>
    <button
    className={styles.ChangeNameBtn}
    onClick={() => setToggle(!toggle)}
      >
      <span>
        Change Name
        <GiPerson className={styles.icon} />
      </span>
    </button>
    {toggle ? <div><input
        placeholder="update name..."
        name="newName"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        /><button onClick={() => {
          submitNameChange(newName)
        }}>update name</button></div> : null}
    </div>
  );
};

export default ChangeName;
