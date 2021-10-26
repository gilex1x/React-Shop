import React from 'react'
import Logo from '../assets/images/SkullGeek.jpg'
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <img src={Logo} width='10%'/>
                    </li>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Categorias</li>
                    <li>Nosotros</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;