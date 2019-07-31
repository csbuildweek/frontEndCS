import React, {useState} from 'react';

import Controls from './Controls/Controls.js';
//import Commands from './Controls/Commands.js';
import TakeBtn from './Buttons/TakeBtn.js';
import StatusBtn from './Buttons/StatusBtn.js';
import DropBtn from './Buttons/DropBtn.js';
import SellBtn from './Buttons/SellBtn.js';
import Display from './Display/Display.js';
import Inventory from './Inventory/Inventory.js';

import styles from './Home.module.scss';

const Home = () => {
  const [options, setOptions] = useState(null)
  const [count, setCount] = useState(0)
  const [picked, setPicked] = useState("")
  const [inventory, setInventory] = useState(null)
  const [drop, setDrop] = useState("")

  return (
    <main>
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
    <div className={styles.CmdBtnWrapper}>
    <TakeBtn picked={picked}/>
    <StatusBtn inventory={inventory} setInventory={setInventory}  />
    <DropBtn drop={drop} />
    <SellBtn drop={drop}/>
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
