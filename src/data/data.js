import React from 'react';

import styles from './data.module.scss';

const data = [];
const row = [];
//const column = [];

//rows
for (let i = 0; i < 10; i++) {
  //columns
  row[i] = [];
  for (let j = 0; j < 50; j++) {
    row[i][j] = {
      //data.push({
        coordinates: `${j}, ${i}`,
        x: j,
        y: i,
        isActive: false,
      }
}
}
    //})
const DataMap = () => {
  return (
    <div className={styles.MapContainer}>
      {row.map(column => {
        return (
          <div key={column.coordinates} className={styles.row}>
            {column.map(node => {
              return (
                <div data-coordinate={node.coordinates} key={node.coordinates} className={styles.location}></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

//console.log(JSON.stringify(data))
console.log(data);

export default DataMap;

//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
//x x x x x x x x x x
