import React from 'react';
import { Link } from 'react-router';

import Grid from '../components/grid.jsx';
import { drawColumn } from '../utils/grid_helper';
import { rows, columns } from '../utils/configuration';

class Draw extends React.Component {

  constructor() {
    super();
    this.state = { board: this.createEmptyBoard() };
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
          margin: 2,
        };
      }
    }

    return board;
  }

  render() {
    const { board } = this.state;
    return (
      <div>
        <h2>Draw as you like!</h2>
        <Grid>{board.map((character, index) => drawColumn(character, index))}</Grid>

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Draw;
