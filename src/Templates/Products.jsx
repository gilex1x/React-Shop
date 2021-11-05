import React from 'react'
import '@styles/Products.css'

const Products = ({children}) => {
    return (
        <section className='productos'>
            {children}
        </section>
    );
}

export default Products;