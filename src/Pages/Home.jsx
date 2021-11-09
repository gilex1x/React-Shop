import React from 'react';
import Card from '../Components/Card';
import Products from '../Template/Products';
import initialState from '../Hooks/useInitialState';
const API= 'http://localhost:3030';



const Home = () => {
    const initial=initialState(API);
    return (
        <React.Fragment>
            <h1>Soy el Home</h1>
            <Products>
               {initial.length===0 ? <h2>...Loading</h2> :(
                   initial.map(item=> <Card key={item.productId} {...item}/>)
               )}
            </Products>
        </React.Fragment>
        
    );
}

export default Home;