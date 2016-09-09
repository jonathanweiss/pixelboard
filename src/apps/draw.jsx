import React from 'react';
import { Link } from 'react-router';

import Grid from '../components/grid.jsx';
import Column from '../components/column.jsx';
import Row from '../components/row.jsx';
import Led from '../components/led.jsx';

import { rows, columns } from '../utils/configuration';

const numberStyles = {
  base: {
    textAlign: 'right',
    display: 'inline-block',
    fontFamily: 'Consolas, Inconsolata, Andale Mono, Monaco, Courier New, Courier',
  },
};

class Draw extends React.Component {

  constructor() {
    super();
    this.state = { board: this.createEmptyBoard() };
  }

  toggleLed(col, row, led) {
    const board = Object.assign([], this.state.board);
    const isOn = board[col][row][led].isActive;
    board[col][row][led].isActive = !isOn;

    this.setState({ board });
  }

  createEmptyBoard() {
    const board = [[]];
    for (let i = 0; i < rows; i++) {
      board[0][i] = [];
      for (let k = 0; k < columns; k++) {
        board[0][i][k] = {
          width: 40,
          height: 40,
          backgroundColor: '#f5f5f5',
          color: '0, 143, 0',
          margin: 2,
        };
      }
    }

    return board;
  }

  render() {
    const { board } = this.state;
    const charValue = [];
    return (
      <div>
        <h2>Draw as you like!</h2>
        <Grid>{board.map((column, columnIndex) => {
          return (<Column key={`column_${columnIndex}`}>
            {column.map((row, rowIndex) => {
              let decimalValue = 0;
              let binaryValue;

              const rowComponent = (
                <Row key={`row_${rowIndex}`}>{row.map((led, ledIndex) => {
                  if (led.isActive) {
                    decimalValue += Math.pow(2, ledIndex);
                  }

                  binaryValue = decimalValue.toString(2);
                  return (
                    <div
                      key={`led_${ledIndex}`}
                      onClick={() => { this.toggleLed(columnIndex, rowIndex, ledIndex); }}
                    ><Led {...led} /></div>
                  );
                })}
                  <div>
                    <span style={numberStyles.base}>{'0'.repeat(columns - binaryValue.length) + binaryValue}</span>
                    &mdash;
                    <span style={numberStyles.base}>{decimalValue}</span>
                  </div>
                </Row>
              );

              charValue.push(decimalValue);
              return rowComponent;
            })}
          </Column>);
        })}</Grid>
        <p>This picture will be stored as: [{charValue.join(', ')}]</p>

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Draw;
