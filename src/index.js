import React from 'react';
import ReactDOM from 'react-dom';

import Grid from './components/grid.jsx'
import Row from './components/row.jsx'
import Column from './components/column.jsx'
import Led from './components/led.jsx'

const createRandomLeds = (amount) => {
    const leds = [];

    for (let i = 1; i < amount; i++) {
        const color = [
            Math.round(Math.random() * 256),
            Math.round(Math.random() * 256),
            Math.round(Math.random() * 256)
        ].join(', ');

        leds.push({
            isActive: Math.round(Math.random()) === 0,
            color,
        });
    }
    return leds;
};

const ROWS = 14;
const COLS = 14;

class App extends React.Component {

    createRandomGrid() {
        const grid = [];

        for (let i = 0; i < ROWS; i++) {
            grid.push(createRandomLeds(COLS));
        }

        return grid;
    }

    constructor() {
        super();

        this.state = {grid: this.createRandomGrid()};
    }

    componentDidMount() {
        this.intervalHandle = window.setInterval(() => {
            this.setState({grid: this.createRandomGrid()});
        }, 5000);
    }

    componentWillUnmount() {
        window.clearInterval(this.intervalHandle);
    }

    render() {
        return (
            <Grid>
                <Column>
                    {this.state.grid.map((row, index) => {
                        return <Row key={`row_${index}`}>{row.map((led, index) => {
                            return <Led key={`led_${index}`} color={led.color} isActive={led.isActive} />})
                        }</Row>
                    })}
                </Column>
            </Grid>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
