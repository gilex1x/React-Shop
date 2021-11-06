import React from 'react';
import '@styles/Card.css';
import Image from '@images/PinUmbrella.jpg';
import { Link } from 'react-router-dom';



const Card = (props) => {
    const {name,price}= props;
    return (
        <Link className='card' to='/producto'>
            <div className='card-image' >
                <img src={Image}/>
            </div>
            <div className='card-description'>
                <h3>{name}</h3>
                <span>{price}</span>
                <button onClick={handleClick}>1</button>
            </div>
        </Link>
    );
}

export default Card;