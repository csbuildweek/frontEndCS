import React from 'react'

const Item = ({ item, index, picked, setPicked }) => {
  const selectItem = (index) => {
    console.log("clicked item: ", index, item)
    setPicked(item.toString())
  }
  return (
    <button
    onClick={(e) => selectItem(index)}
    >{item}</button>
  )
}

export default Item;
