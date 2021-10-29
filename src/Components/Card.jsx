import React from 'react';
import {useState} from 'react';
import '@styles/Card.css';
import Image from '@images/PinUmbrella.jpg';
import { Link } from 'react-router-dom';



const Card = () => {
    const [car,setCar]=useState('AGREGAR AL CARRITO');
    const handleClick=()=>{
        if(car=='AGREGAR AL CARRITO'){
            setCar('ELIMINAR')
        }else{
            setCar('AGREGAR AL CARRITO')
        }
    }
    return (
        <Link className='card' to='/producto'>
            <div className='card-image' >
                <img src={Image}/>
            </div>
            <div className='card-description'>
                <h3>Nombre producto</h3>
                <span>Precio</span>
                <button onClick={handleClick}>{car}</button>
            </div>
        </Link>
    );
}

export default Card;