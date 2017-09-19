import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, history} from 'react-router-dom';

import store from './store';
import './index.css';
import {
    App
} from './containers';


ReactDOM.render(
    <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>

                </Route>

            </Router>
    </Provider >,
    document.getElementById('root')
)