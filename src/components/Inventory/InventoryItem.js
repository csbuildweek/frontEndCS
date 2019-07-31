import React, {useEffect} from 'react'

const InventoryItem = ({index, inv, setDrop, drop}) => {
  let thingToDrop;
  const selectDrpItm = async (index) => {
    console.log(index, inv)
    //console.log(inv)
    //thingToDrop = await inv.toString()
    //console.log(thingToDrop)
    //return thingToDrop;
    setDrop(inv.toString())
    console.log("Drop: ", drop)
    //setDrop(thingToDrop)
    //console.log(drop)
  }

  //useEffect(() => {
    //console.log(thingToDrop)
    //setDrop(thingToDrop)
  //})

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
