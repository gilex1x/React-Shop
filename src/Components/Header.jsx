import React, { useEffect,useState } from 'react';
import {useSelector} from 'react-redux';
import Logo from 'Images/SkullGeek.png';
import 'Styles/Header.css';
const Header = () => {
    const cartData=useSelector(state=>state.cart);
	const[label,setLabel]=useState(0);
	useEffect(()=>{

	},[])
	return (
		<header className='header'>
			<nav className='nav-container'>
				<img src={Logo} width='5%' alt='Logo Geek Things' />
				<ul className='nav-menu'>
					<li className='nav-menu__item'>Inicio</li>
					<li className='nav-menu__item'>Productos</li>
					<li className='nav-menu__item'>Categorias</li>
					<li className='nav-menu__item'>Nosotros</li>
					<li className='nav-menu__item'>
                        carrito: {cartData.length}
                    </li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
