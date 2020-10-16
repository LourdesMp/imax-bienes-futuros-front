import React from 'react';
import img from '../assets/logo-imax.png';
import { Link } from 'react-router-dom';


const Header = () => {
    

    
    return (
    <section className="home">
        <header>
            <img className="logo-imax" src={img}  alt="logo"/>
            <nav className= "menu">
                <ul className="menubar">
                <li>
                    <Link  to="/perfil">Perfil</Link>
                </li>
                <li>
                    <Link  to="/home">Bienes Futuros</Link>
                    <ul>       
                        <li> <Link  to="/proyectos">Proyectos</Link></li>
                        <li> <Link  to="/nuevo">Nuevo Proyectos</Link></li>     
                    </ul>
                </li>
                <li>
                <a href=' ' className="logOut" >Cerrar Sesion <i className="fas fa-sign-out-alt"/></a>
                </li>
                </ul>
            </nav>
        </header>
    </section>
)};

export default Header;