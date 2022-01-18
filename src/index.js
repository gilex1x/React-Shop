import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import initialState from '../src/Utils/GetProducts';
import reducer from 'Reducers/index';
import App from './Routes/App';

//const store=createStore(reducer,initialState);
const store=createStore(reducer,initialState('http://localhost:3030'));

ReactDOM.render(

    <Provider store={store}>
        <App/>
    </Provider>,document.getElementById('root'));

