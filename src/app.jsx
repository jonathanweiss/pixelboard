import React from 'react';

import Grid from './components/grid.jsx'
import Character from './components/character.jsx'
import Row from './components/row.jsx'
import Led from './components/led.jsx'

import {characters, missingno} from './configuration.js';

const CHARACTERS = 1;
const ROWS = 14;
const COLS = 14;
const DELAY = 1000;
const FONT_SIZE = 10;

class App extends React.Component {

    createRandomLed() {
        const color = [
            Math.round(Math.random() * 256),
            Math.round(Math.random() * 256),
            Math.round(Math.random() * 256)
        ].join(', ');
        const { fontSize: width = FONT_SIZE, fontSize: height = FONT_SIZE } = this.state;

        return {
            isActive: Math.round(Math.random()) === 0,
            color,
            width,
            height
        }
    }

    createRandomLeds(amount) {
        const leds = [];

        for (let i = 0; i < amount; i++) {
            leds.push(this.createRandomLed());
        }

        return leds;
    }

    createRandomGrid(characters) {
        const grid = [];

        for (let i = 0; i < characters; i++) {
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
            const intVal = source[i]
            let bits = intVal.toString(2);

            bits = ('0'.repeat(COLS - bits.length) + bits).split('');
            for (let k = 0; k < COLS; k++) {
                grid[i][k] = {isActive: bits[k] === '1', width, height};
            }
        }

        return grid;
    }

    getTime() {
        const twoDigits = (val) => val < 10 ? '0' + val : val;

        const now = new Date();
        return `${twoDigits(now.getHours())}:${twoDigits(now.getMinutes())}:${twoDigits(now.getSeconds())}`;
    }

    drawGrid(character, index) {
        return <Character key={`character_${index}`}>
            {character.map((row, index) => {
                return <Row key={`row_${index}`}>{row.map((led, index) => {
                    return <Led key={`led_${index}`} {...led} />
                })}</Row>
            })}
        </Character>
    }

    constructor() {

        super();

        const now = new Date();
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

    render() {
        const clock = this.state.clock.split('').map(character => this.createCharacter(character));
        const grid = this.createRandomGrid(this.state.clock.length);
        const freetext = this.state.text.split('').map(character => this.createCharacter(character));

        return (
            <div>
                <h2>Clock</h2>
                <p>
                    <label htmlFor="fontSize">font size</label>
                    <input onChange={ () => {this.setState({fontSize: parseInt(this.refs.fontSize.value, 10)})} } id="fontSize" type="text" ref="fontSize" defaultValue={this.state.fontSize} />
                </p>

                <Grid>{clock.map((character, index) => this.drawGrid(character, index))}</Grid>

                <h2>Random colored pixels</h2>
                <Grid>{grid.map((character, index) => this.drawGrid(character, index))}</Grid>

                <h2>Free input</h2>
                <p>
                    <label htmlFor="text">text</label>
                    <input onChange={ () => {this.setState({text: this.refs.text.value})} } id="text" type="text" ref="text" defaultValue={this.state.text} />
                </p>
                <Grid>{freetext.map((character, index) => this.drawGrid(character, index))}</Grid>
            </div>

        );
    }
}

export default App;
