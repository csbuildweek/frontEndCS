import React, {useState} from 'react';

import Controls from './Controls/Controls.js';
//import Commands from './Controls/Commands.js';
import TakeBtn from './Buttons/TakeBtn.js';
import StatusBtn from './Buttons/StatusBtn.js';
import DropBtn from './Buttons/DropBtn.js';
import SellBtn from './Buttons/SellBtn.js';
import Display from './Display/Display.js';
import Inventory from './Inventory/Inventory.js';
import DataMap from '../data/data.js';
import ChangeName from './Buttons/ChangeName.js';
import ShrineBtn from './Buttons/ShrineBtn.js';
import FlyControls from './Controls/FlyControls.js';

import styles from './Home.module.scss';

const Home = () => {
  const [options, setOptions] = useState(null)
  const [count, setCount] = useState(0)
  const [picked, setPicked] = useState("")
  const [inventory, setInventory] = useState(null)
  const [drop, setDrop] = useState("")
  const [newName, setNewName] = useState("")

  return (
    <main>
    <DataMap />
    {options &&
        <Display
          options={options}
          setCount={setCount}
          count={count}
          setPicked={setPicked}
        />}
    <Controls
    setOptions={setOptions}
    setCount={setCount}
    />
    <FlyControls
    setOptions={setOptions}
    setCount={setCount}
    />
    <div className={styles.CmdBtnWrapper}>
    <TakeBtn picked={picked}/>
    <StatusBtn inventory={inventory} setInventory={setInventory}  />
    <DropBtn drop={drop} />
    <SellBtn drop={drop}/>
    <ChangeName newName={newName} setNewName={setNewName}/>
    <ShrineBtn setOptions={setOptions} setCount={setCount}/>
    </div>
    {inventory &&<Inventory inventory={inventory} setDrop={setDrop} drop={drop}/>}
    {/*<Commands
    setOptions={setOptions}
    options={options}
    picked={picked}
    setPicked={setPicked}
    />*/}
    </main>
  )
}

export default Home;
