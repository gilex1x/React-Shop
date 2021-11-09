import React,{useContext} from 'react'
import CartContext from '../Hooks/Context/CartContext';
import Logo from '../Assets/Images/SkullGeek.png'
import '../Assets/Styles/Header.css';
const Header = () => {
    const cart= useContext(CartContext);
    return (
        <header className='header'>
            <nav className='nav-container'>
                    <img src={Logo} width='5%' alt='Logo Geek Things'/>
                <ul className='nav-menu'>
                    <li className='nav-menu__item'>
                        Inicio
                    </li>
                    <li className='nav-menu__item'>
                        Productos
                    </li>
                    <li className='nav-menu__item'>
                        Categorias
                    </li>
                    <li className='nav-menu__item'>
                        Nosotros
                    </li>
                    <li className='nav-menu__item'>
                        carrito: {cart.length}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;