import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import About from '../Pages/About';
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import Layout from '../Template/Layout';
import ShipForm from '../Pages/ShipForm';
import '../Assets/Styles/index.css';


const App = () => {
    return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/nosotros' component={About}/>
                <Route exact path='/confirmar-compra' component={ShipForm}/>
                <Route exact path='/:productId' component={Product}/>
            </Switch>
        </Layout>
    </BrowserRouter>
    );
}

export default App;