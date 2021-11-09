import React from 'react'
import '../Assets/Styles/Products.css'

const Products = ({children}) => {
    return (
        <section className='productos'>
            {children}
        </section>
    );
}

export default Products;