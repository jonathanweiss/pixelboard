import React from 'react';

import Grid from './components/grid.jsx';
import Character from './components/character.jsx';
import Row from './components/row.jsx';
import Led from './components/led.jsx';

import { characters, missingno } from './configuration.js';

const ROWS = 14;
const COLS = 14;
const DELAY = 1000;
const FONT_SIZE = 4;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      clock: this.getTime(),
      fontSize: FONT_SIZE,
    };
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({
        clock: this.getTime(),
      });
    }, DELAY);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  getTime() {
    const twoDigits = (val) => { return val < 10 ? `0${val}` : val; };

    const now = new Date();
    return `${twoDigits(now.getHours())}:${twoDigits(now.getMinutes())}:${twoDigits(now.getSeconds())}`;
  }

  createRandomLed() {
    const color = [
      Math.round(Math.random() * 256),
      Math.round(Math.random() * 256),
      Math.round(Math.random() * 256),
    ].join(', ');
    const { fontSize: width = FONT_SIZE, fontSize: height = FONT_SIZE } = this.state;

    return {
      isActive: Math.round(Math.random()) === 0,
      color,
      width,
      height,
    };
  }

  createRandomLeds(amount) {
    const leds = [];

    for (let i = 0; i < amount; i++) {
      leds.push(this.createRandomLed());
    }

    return leds;
  }

  createRandomGrid(chars) {
    const grid = [];

    for (let i = 0; i < chars; i++) {
      grid[i] = [];
      for (let k = 0; k < ROWS; k++) {
        grid[i][k] = this.createRandomLeds(COLS);
      }
    }

    return grid;
  }

  createCharacter(character) {
    const grid = [];
    const source = characters[character] || missingno;
    const { fontSize: width = FONT_SIZE, fontSize: height = FONT_SIZE } = this.state;

    for (let i = 0; i < ROWS; i++) {
      grid[i] = [];
      const intVal = source[i];
      let bits = intVal.toString(2);

      bits = ('0'.repeat(COLS - bits.length) + bits).split('');
      for (let k = 0; k < COLS; k++) {
        grid[i][k] = { isActive: bits[k] === '1', width, height };
      }
    }

    return grid;
  }

  drawGrid(character, charIndex) {
    return (<Character margin={this.state.fontSize} key={`character_${charIndex}`}>
      {character.map((row, rowIndex) => {
        return (<Row key={`row_${rowIndex}`}>{row.map((led, ledIndex) => {
          return <Led key={`led_${ledIndex}`} {...led} />;
        })}</Row>);
      })}
    </Character>);
  }

  render() {
    const clock = this.state.clock.split('').map(character => this.createCharacter(character));
    const grid = this.createRandomGrid(this.state.clock.length);
    const freetext = this.state.text.split('').map(character => this.createCharacter(character));

    return (
      <div>
        <h2>Clock</h2>
        <p>
          <label htmlFor="fontSize">font size</label>
          <input
            onChange={() => { this.setState({ fontSize: parseInt(this.refs.fontSize.value, 10) }); }}
            id="fontSize"
            type="text"
            ref="fontSize"
            defaultValue={this.state.fontSize}
          />
        </p>

        <Grid>{clock.map((character, index) => this.drawGrid(character, index))}</Grid>

        <h2>Random colored pixels</h2>
        <Grid>{grid.map((character, index) => this.drawGrid(character, index))}</Grid>

        <h2>Free input</h2>
        <p>
          <label htmlFor="text">text</label>
          <input onChange={() => { this.setState({ text: this.refs.text.value }); }} id="text" type="text" ref="text" defaultValue={this.state.text} />
        </p>
        <Grid>{freetext.map((character, index) => this.drawGrid(character, index))}</Grid>
      </div>

    );
  }
}

export default App;
