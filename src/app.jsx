import React from 'react';

import Grid from './components/grid.jsx'
import Character from './components/character.jsx'
import Row from './components/row.jsx'
import Led from './components/led.jsx'

import {characters, missingno} from './configuration.js';

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

    createCharacter(character) {
        const grid = [];
        const source = characters[character] || missingno;
        const { fontSize: width = 20, fontSize: height = 20 } = this.state;

        for (let i = 0; i < ROWS; i++) {
            grid[i] = [];
            const intVal = source[i]
            let bits = intVal.toString(2);

            bits = ('0'.repeat(COLS - bits.length) + bits).split('');
            for (let k = 0; k < COLS; k++) {
                grid[i][k] = {isActive: bits[k] === '1', width, height};
            }
        }

        return grid;
    }

    constructor() {
        super();

        const now = new Date();

        this.state = {
            text: `${now.getHours()}:${now.getMinutes()}`,
            fontSize: 10,
        };
    }

    render() {
        const clock = this.state.text.split('').map(character => this.createCharacter(character));
        const grid = createRandomGrid(3);

        return (
            <div>
                <h2>Clock</h2>
                <p>
                    <label htmlFor="fontSize">font size</label>
                    <input onChange={ () => {this.setState({fontSize: parseInt(this.refs.fontSize.value, 10)})} } id="fontSize" type="text" ref="fontSize" defaultValue={this.state.fontSize} />
                </p>

                <p>
                    <label htmlFor="inputText">text</label>
                    <input onChange={ () => {this.setState({text: this.refs.inputText.value})} }  id="inputText" type="text" ref="inputText" defaultValue={this.state.text} />
                </p>

                <Grid>
                    {clock.map((character, index) => {
                        return <Character key={`character_${index}`}>
                            {character.map((row, index) => {
                                return <Row key={`row_${index}`}>{row.map((led, index) => {
                                    return <Led key={`led_${index}`} {...led} />
                                })}</Row>
                            })}
                        </Character>
                    })}
                </Grid>

                <h2>Random colored pixels</h2>
                <Grid>
                    {grid.map((character, index) => {
                        return <Character key={`character_${index}`}>
                            {character.map((row, index) => {
                                return <Row key={`row_${index}`}>{row.map((led, index) => {
                                    return <Led key={`led_${index}`} {...led} />
                                })}</Row>
                            })}
                        </Character>
                    })}
                </Grid>
            </div>

        );
    }
}

export default App;
