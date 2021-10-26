import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import About from '../pages/About';
import Home from '../pages/Home';
import Produc from '../pages/Produc';
import Layout from '../template/Layout';
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