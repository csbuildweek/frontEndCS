import React, {useState} from 'react';

import Controls from './Controls/Controls.js';
import Commands from './Controls/Commands.js';
import Display from './Display/Display.js'

const Home = () => {
  const [options, setOptions] = useState(null)
  const [count, setCount] = useState(0)
  return (
    <main>
    {options &&
        <Display
          options={options}
          setCount={setCount}
          count={count}
        />}
    <Controls
    setOptions={setOptions}
    setCount={setCount}
    />
    <Commands
    setOptions={setOptions}
    />
    </main>
  )
}

export default Home;
