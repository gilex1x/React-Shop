import React,{useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setDataProducts} from 'Actions/index'
import { createInitialState} from '../Utils/CreateInitialState';
import About from 'Pages/About';
import Home from 'Pages/Home';
import Product from 'Pages/Product';
import Layout from '../Templates/Layout';
import ShipForm from 'Pages/ShipForm';


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
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route  path='/nosotros' element={<About/>}/>
                <Route  path='/confirmar-compra' element={<ShipForm/>}/>
                <Route  path='/productos/:productId' element={<Product/>}/>
            </Routes>
        </Layout>
    </BrowserRouter>
    );
}


export default App;