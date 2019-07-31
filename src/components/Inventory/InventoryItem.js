import React, {useEffect} from 'react'

const InventoryItem = ({index, inv, setDrop, drop}) => {
  let thingToDrop;
  const selectDrpItm = async (index) => {
    console.log(index, inv)
    setDrop(inv.toString())
    console.log("Drop: ", drop)
  }


  return (
  <div key={index}>
  <p>Items:</p>
  <button
  onClick={(e) => selectDrpItm(index)}
    >{inv}</button>
  </div>
  )
}

export default InventoryItem;
