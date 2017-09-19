import React, { Component } from 'react';
import {Header} from '../../components'

class App extends Component {
    render() {
        return (
            <div>
                <Header message="Hello World"/>
                {this.props.children}
            </div>
        );
    }
}

export default App;