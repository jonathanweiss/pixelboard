import React from 'react';
import ReactDOM from 'react-dom';

import {numbers} from './configuration.js';

import Grid from './components/grid.jsx'
import Character from './components/character.jsx'
import Row from './components/row.jsx'
import Led from './components/led.jsx'

const createRandomLed = () => {
    const color = [
        Math.round(Math.random() * 256),
        Math.round(Math.random() * 256),
        Math.round(Math.random() * 256)
    ].join(', ');

    return {
        isActive: Math.round(Math.random()) === 0,
        color,
    }
};

const createRandomLeds = (amount) => {
    const leds = [];

    for (let i = 1; i < amount; i++) {
        leds.push(createRandomLed());
    }

    return leds;
};

const createRandomGrid = (characters) => {
    const grid = [];

    for (let i = 0; i < characters; i++) {
        grid[i] = [];
        for (let k = 0; k < ROWS; k++) {
            grid[i][k] = createRandomLeds(COLS);
        }
    }

    return grid;
};

const CHARACTERS = 1;
const ROWS = 14;
const COLS = 14;

class App extends React.Component {

    createDigit(digit) {
        const grid = [];
        const source = numbers[digit];

        for (let i = 0; i < ROWS; i++) {
            grid[i] = [];
            const intVal = numbers[digit][i]
            let bits = intVal.toString(2);

            bits = ('0'.repeat(COLS - bits.length) + bits).split('');
            for (let k = 0; k < COLS; k++) {
                grid[i][k] = {isActive: bits[k] === '1'};
            }
        }

        return grid;
    }

    constructor() {
        super();

        this.state = {grid: [this.createDigit(1), this.createDigit(2)]};
        // this.state = {grid: createRandomGrid(2)};
    }

    render() {
        return (
            <Grid>
                {this.state.grid && this.state.grid.map((character, index) => {
                    return <Character key={`character_${index}`}>
                        {character.map((row, index) => {
                            return <Row key={`row_${index}`}>{row.map((led, index) => {
                                return <Led key={`led_${index}`} color={led.color} isActive={led.isActive} />
                            })}</Row>
                        })}
                    </Character>
                })}
            </Grid>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
