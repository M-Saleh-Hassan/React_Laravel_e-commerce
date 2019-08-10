import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <h1>This is really working!!</h1>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));