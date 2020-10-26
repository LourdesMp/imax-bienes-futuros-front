import React from 'react';
import img from '../assets/logo-imax.png';
import { Link } from 'react-router-dom';
import 'firebase/auth';

import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = () => {

    //disparo de la accion para el redux
    const dispatch = useDispatch();

    //funcion de cerrar sesion
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
                <li >
                    <Link  to="/home/perfil">Perfil</Link>
                </li>
                <li>
                     <Link  to="/home"> Bienes Futuros</Link>
                    <ul>       
                        <li > <Link  className="sub"to="/home/proyectos">Proyectos</Link></li>
                        <li > <Link className="sub"to="/home/tasaciones">Tasaciones</Link></li>    
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