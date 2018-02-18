import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore
} from 'redux';
import {
    Provider
} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducers/index';

require('bootstrap/dist/css/bootstrap.min.css');

const store = createStore(
    allReducers
);

ReactDOM.render( 
    <Provider store={store}>
        < App />
    </Provider> , document.getElementById('root'));
    
registerServiceWorker();