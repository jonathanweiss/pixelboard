import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <span>app</span>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
