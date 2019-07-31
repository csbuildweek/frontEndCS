import React, {useState} from 'react';

import Controls from './Controls/Controls.js';
//import Commands from './Controls/Commands.js';
import TakeBtn from './Buttons/TakeBtn.js';
import Display from './Display/Display.js';

const Home = () => {
  const [options, setOptions] = useState(null)
  const [count, setCount] = useState(0)
  const [picked, setPicked] = useState("")
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
    <TakeBtn picked={picked}/>
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
