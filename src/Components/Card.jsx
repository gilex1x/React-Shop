import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import Image from '../Assets/Images/PinUmbrella.jpg';
import '../Assets/Styles/Card.css';



const Card = ({nombre,price,productId}) => {
    const [car,setCar]=useState('AGREGAR AL CARRITO');
    const handleClick=()=>{
        if(car=='AGREGAR AL CARRITO'){
            setCar('ELIMINAR')
        }else{
            setCar('AGREGAR AL CARRITO')
        }
    }
    return (
        <div className='card'>
            <Link  to={`/${productId}`}>
            <div className='card-image' >
                <img src={Image}/>
            </div>
            <div className='card-description'>
                <h3>{nombre}</h3>
                <span>{price}</span>
            </div>
            </Link>
           
                <button onClick={handleClick}>{car}</button>
        </div>
    );
}

export default Card;