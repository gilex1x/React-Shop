import React from 'react'
import '@styles/Card.css'


const Card = () => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src='' alt='imagen producto'/>
            </div>
            <div className='card-description'>
                <h3>Nombre producto</h3>
                <span>Precio</span>
                <button>AGREGAR AL CARRITO</button>
            </div>
        </div>
    );
}

export default Card;