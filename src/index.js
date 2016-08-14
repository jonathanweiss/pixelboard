import React from 'react';
import ReactDOM from 'react-dom';

import Grid from './components/grid.jsx'
import Row from './components/row.jsx'
import Column from './components/column.jsx'
import Led from './components/led.jsx'

const createRandomLeds = (amount) => {
    const leds = [];
    for (let i = 1; i < amount; i++) {

        const colorValues = [
            Math.round(Math.random() * 256),
            Math.round(Math.random() * 256),
            Math.round(Math.random() * 256)
        ].join(', ');
        const color = `rgba(${colorValues}, 1)`;

        leds.push(<Led key={Math.random()} color={color} isActive={Math.round(Math.random()) === 0} />);
    }
    return leds;
};

class App extends React.Component {

    render() {
        return (
            <Grid>
                <Column>
                    <Row>{createRandomLeds(10)}</Row>
                    <Row>{createRandomLeds(10)}</Row>
                    <Row>{createRandomLeds(10)}</Row>
                    <Row>{createRandomLeds(10)}</Row>
                    <Row>{createRandomLeds(10)}</Row>
                    <Row>{createRandomLeds(10)}</Row>
                    <Row>{createRandomLeds(10)}</Row>
                    <Row>{createRandomLeds(10)}</Row>
                    <Row>{createRandomLeds(10)}</Row>
                    <Row>{createRandomLeds(10)}</Row>
                </Column>
            </Grid>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
