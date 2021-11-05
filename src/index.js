import React from 'react'
import ReactDOM from 'react-dom';
import Apps from './Routes/Apps';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
ReactDOM.render(
    <Provider>
        <Apps/>
    </Provider>,document.getElementById('root'));

