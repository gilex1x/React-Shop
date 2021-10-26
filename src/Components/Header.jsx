import React from 'react'
import Logo from '@images/SkullGeek.png'
import '@styles/Header.css';
const Header = () => {
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
                </ul>
            </nav>
        </header>
    );
}

export default Header;