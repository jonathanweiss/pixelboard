import React from 'react';
import { Link } from 'react-router';

import Grid from '../components/grid.jsx';
import { drawColumn, getBits } from '../utils/grid_helper';
import { defaultGrid } from '../utils/configuration';

class FreeText extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  render() {
    const freetext = this.state.text
      .split('')
      .map(character => getBits(character, defaultGrid));

    return (
      <div>
        <h2>Free input</h2>
        <p>
          <label htmlFor="text">text</label>
          <input
            onChange={() => { this.setState({ text: this.refs.text.value }); }}
            id="text"
            type="text"
            ref="text"
            defaultValue={this.state.text}
            autoFocus
          />
        </p>
        <Grid>{freetext.map((character, index) => drawColumn(character, index))}</Grid>

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default FreeText;
