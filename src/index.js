import React from 'react'
import ReactDOM from 'react-dom';
import App from './Routes/App';
import CartContext from './Hooks/Context/CartContext';


ReactDOM.render(
    <CartContext.Provider value={[]}>
        <App/>
    </CartContext.Provider>,document.getElementById('root'));

