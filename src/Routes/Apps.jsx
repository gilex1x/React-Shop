import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import About from '../Pages/About';
import Home from '../Pages/Home';
import Produc from '../Pages/Produc';
import Layout from '../Template/Layout';
import '../assets/index.css';


const Apps = () => {
    return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/product' component={Produc}/>
                <Route exact path='/Nosotros' component={About}/>
            </Switch>
        </Layout>
    </BrowserRouter>
    );
}

export default Apps;