import React from 'react';
import img from '../../assets/logo-imax.png';
import { Link } from 'react-router-dom';


const Login = () => {
  
    return (
    <section className="login">
        <form className="logIn"> 
            <img className="logo-imax" alt="logo"  src={img}/>
            <div className="formulary" >
                <div className="box-user"> <i className="user-icon fas fa-user"/> 
                <input className="emailLogin user" type="email" 
                placeholder="Correo Electrónico"/> </div>
                <div className="box-user"> <i className="user-icon fas fa-lock"/> 
                <input className="passwordLogin user" type="password"
                 placeholder="Contraseña"  />  </div>
                <div className="reg_error_inner" id="reg_error_inner"/>
                <button type="submit"className= "btn-login"> Ingresar </button>
            </div>
            <p className="p-Options">¿No tienes cuenta? <Link  to="/registro">Regístrate</Link> </p>
        </form>
    </section>
    
)};

export default Login;