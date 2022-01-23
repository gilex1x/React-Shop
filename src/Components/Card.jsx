import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { addToCart, removeFromCart,getProductData } from 'Actions/index';
import Image from '../Assets/Images/PinUmbrella.jpg';
import 'Styles/Card.css';

const Card = ({ item }) => {
	const { nombre, price, productId } = item;
	const dispatch = useDispatch();
	const navigate=useNavigate();
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
	const handleClick=()=>{
		dispatch(getProductData(productId));
		navigate(`/productos/${productId}`);
	}
	return (
		<div className='card'>
			<button onClick={handleClick}>
				<div className='card-image'>
					<img src={Image} />
				</div>
				<div className='card-description'>
					<h3>{nombre}</h3>
					<span>{price}</span>
				</div>
			</button>

			<button onClick={cartData.includes(item) ? handleDelete : handleAdd}>
				{label}
			</button>
		</div>
	);
};

export default Card;
