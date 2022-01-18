import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from 'Reducers/index';
import App from './Routes/App';



const state={
    productList:[],
    cart:[]
}
const dev = window.__REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION__();
const store=createStore(reducer,state,dev);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,document.getElementById('root'));

