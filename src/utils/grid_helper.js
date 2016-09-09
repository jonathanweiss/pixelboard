import React from 'react';

import Column from '../components/column.jsx';
import Row from '../components/row.jsx';
import Led from '../components/led.jsx';

import { characters, missingno } from './configuration.js';

const getBits = (character, gridConfiguration) => {
  const grid = [];
  const source = characters[character] || missingno;
  const { width, height, rows, columns } = gridConfiguration;

  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    const intVal = source[i];
    let bits = intVal.toString(2);

    bits = ('0'.repeat(columns - bits.length) + bits).split('');
    for (let k = 0; k < columns; k++) {
      grid[i][k] = { isActive: bits[k] === '1', width, height };
    }
  }

  return grid;
};

const drawColumn = (column, colIndex, margin = 4) => {
  return (
    <Column margin={margin} key={`column_${colIndex}`}>
      {column.map((row, rowIndex) => {
        return (<Row key={`row_${rowIndex}`}>{row.map((led, ledIndex) => {
          return <Led key={`led_${ledIndex}`} {...led} />;
        })}</Row>);
      })}
    </Column>
  );
};

export { getBits, drawColumn };
