import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from 'Actions/index';
import Image from '../Assets/Images/PinUmbrella.jpg';
import 'Styles/Card.css';

const Card = ({ item }) => {
	const { nombre, price, productId } = item;
	const dispatch = useDispatch();
	const cartData = useSelector((state) => state.cart);
	const [label, setLabel] = useState('Agregar carro');
	const handleAdd = () => {
		dispatch(addToCart(item));
		setLabel('Eliminar Carro');
	};
	const handleDelete = () => {
		dispatch(removeFromCart(productId));
		setLabel('Agregar Carro');
	};
	const handleClick = () => {
		if (cartData.includes(item)) {
		} else {
		}
	};
	return (
		<div className='card'>
			<Link to={`/${productId}`}>
				<div className='card-image'>
					<img src={Image} />
				</div>
				<div className='card-description'>
					<h3>{nombre}</h3>
					<span>{price}</span>
				</div>
			</Link>

			<button onClick={cartData.includes(item) ? handleDelete : handleAdd}>
				{label}
			</button>
		</div>
	);
};

export default Card;
