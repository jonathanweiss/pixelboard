import React from 'react';
import { Link } from 'react-router';

import Grid from '../components/grid.jsx';
import Column from '../components/column.jsx';
import Row from '../components/row.jsx';
import Led from '../components/led.jsx';

import { rows, columns, characters, defaultGrid } from '../utils/configuration';
import { getBits } from '../utils/grid_helper';

const numberStyles = {
  base: {
    userSelect: 'none',
    textAlign: 'right',
    display: 'inline-block',
    fontFamily: 'Consolas, Inconsolata, Andale Mono, Monaco, Courier New, Courier',
  },
};

const intValueStyles = {
  base: {
    backgroundColor: '#ecf0c0',
    fontFamily: 'Consolas, Inconsolata, Andale Mono, Monaco, Courier New, Courier',
  },
};

const pixelProps = {
  isActive: false,
  width: 40,
  height: 40,
  backgroundColor: '#f5f5f5',
  color: '#008f00',
  margin: 2,
};

class Draw extends React.Component {
  constructor() {
    super();

    this.mouseDown = false;
    this.state = { board: this.createEmptyBoard() };

    this.onMouseDown = () => {
      this.mouseDown = true;
    };

    this.onMouseUp = () => {
      this.mouseDown = false;
    };
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mouseup', this.onMouseUp);
  }

  toggleLed(col, row, led) {
    const board = Object.assign([], this.state.board);
    const isOn = board[col][row][led].isActive;
    board[col][row][led].isActive = !isOn;

    this.setState({ board });
  }

  invertBoard() {
    const board = Object.assign([], this.state.board);
    const col = 0;

    for (let i = 0; i < rows; i++) {
      for (let k = 0; k < columns; k++) {
        const isOn = board[col][i][k].isActive;
        board[col][i][k].isActive = !isOn;
      }
    }

    this.setState({ board });
  }

  clearBoard() {
    if (confirm('Are you sure?')) { // eslint-disable-line no-alert
      this.setState({ board: this.createEmptyBoard() });
    }
  }

  createEmptyBoard() {
    const board = [[]];
    for (let i = 0; i < rows; i++) {
      board[0][i] = [];
      for (let k = 0; k < columns; k++) {
        board[0][i][k] = { ...pixelProps };
      }
    }

    return board;
  }

  updateBoard(bits) {
    const board = [[]];

    for (let i = 0; i < rows; i++) {
      board[0][i] = [];
      for (let k = 0; k < columns; k++) {
        board[0][i][k] = {
          ...pixelProps,
          isActive: bits[i][k].isActive,
        };
      }
    }

    this.setState({ board });
  }

  displayCharacter(character) {
    if (confirm('Are you sure?')) { // eslint-disable-line no-alert
      this.updateBoard(getBits(character, defaultGrid));
    }
  }

  loadFromString(string) {
    if (confirm('Are you sure?')) { // eslint-disable-line no-alert
      const grid = [];

      string.split(',')
        .map(value => parseInt(value, 10))
        .forEach((intVal, i) => {
          let bits = intVal.toString(2);
          grid[i] = [];

          bits = ('0'.repeat(columns - bits.length) + bits).split('').reverse();
          for (let k = 0; k < columns; k++) {
            grid[i][k] = { isActive: bits[k] === '1' };
          }
        });

      this.updateBoard(grid);
    }
  }

  render() {
    const { board } = this.state;
    const charValue = [];

    return (
      <div>
        <h2>Draw as you like!</h2>

        <label htmlFor="selectChar">Load existing character:</label>
        <select id="selectChar" onChange={event => this.displayCharacter(event.target.value)}>
          <option></option>
          {Object.keys(characters).map(key => <option key={key} value={key}>{key}</option>)}
        </select>
        <hr />

        <input type="text" defaultValue="" style={{ width: '80%' }} ref="textInput" />
        <button onClick={() => this.loadFromString(this.refs.textInput.value)}>Load from integer values</button>

        <hr />

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
                      onMouseEnter={() => { if (this.mouseDown) this.toggleLed(columnIndex, rowIndex, ledIndex); }}
                      onMouseDown={() => { this.toggleLed(columnIndex, rowIndex, ledIndex); }}
                    ><Led {...led} /></div>
                  );
                })}
                  <div style={numberStyles.base}>
                    {'0'.repeat(columns - binaryValue.length) + binaryValue}
                    &mdash;
                    {decimalValue}
                  </div>
                </Row>
              );

              charValue.push(decimalValue);
              return rowComponent;
            })}
          </Column>);
        })}</Grid>

        <p>This picture will be stored as:</p>
        <p style={intValueStyles.base}>{charValue.join(', ')}</p>
        <button onClick={() => { this.invertBoard(); }}>Invert board</button>
        <button onClick={() => { this.clearBoard(); }}>Clear board</button>

        <hr />

        <p>
          <Link to="/">Back</Link>
        </p>
      </div>
    );
  }
}

export default Draw;
