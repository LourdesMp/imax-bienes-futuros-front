import React from 'react';
import img from '../assets/logo-imax.png';
import { Link } from 'react-router-dom';
import 'firebase/auth';

import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = () => {

    const dispatch = useDispatch();
    const handleLogout = (e) =>  {
        e.preventDefault();
        dispatch(startLogout());
    }

    
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
                <a href=' ' onClick={handleLogout} className="logOut" >Cerrar Sesion <i className="fas fa-sign-out-alt"/></a>
                </li>
                </ul>
            </nav>
        </header>
    </section>
)};

export default Header;