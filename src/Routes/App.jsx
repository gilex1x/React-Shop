import React,{useEffect} from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setDataProducts} from 'Actions/index'
import { createInitialState} from '../Utils/CreateInitialState';
import About from 'Pages/About';
import Home from 'Pages/Home';
import Product from 'Pages/Product';
import Layout from '../Templates/Layout';
import ShipForm from 'Pages/ShipForm';
import 'Styles/index.css';


const App = () => {
    const dispatch = useDispatch();
    let data=[]
    
    useEffect(async()=>{
        data =await createInitialState('http://localhost:3030');
        dispatch(setDataProducts(data));
    },[]);
    
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