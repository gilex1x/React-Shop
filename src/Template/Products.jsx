import React from 'react';
import Card from '../Components/Card';
import initialState from '../Hooks/useGetProducts';
import '../Assets/Styles/Products.css'

const API= 'http://localhost:3030';

const Products = () => {
    const initial=initialState(API);
    return (
        <section className='productos'>
             {initial.length===0 ? <h2>...Loading</h2> :(
                   initial.map(item=> <Card key={item.productId} {...item}/>)
               )}
        </section>
    );
}

export default Products;