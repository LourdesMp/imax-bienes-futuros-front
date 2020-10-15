import React from 'react';
import img from '../../assets/logo-imax.png';


const register = () => (
    <div className="form-register">
       <form className="box-register"> 
        <img className="logo-imax" src={img} alt="logo"  />
        <div className="formulary">
          <div className="box-user"> <i className="user-icon fas fa-user"/> <input className="emailRegister user" type="email" placeholder="Correo Electrónico" required/>   </div>
          <div className="box-user"> <i className="user-icon fas fa-lock"/> <input className="passwordRegister user" type="password" placeholder="Contraseña" required/>  </div>  
          <div className="box-user"> <i className="user-icon fas fa-lock"/> <input className="passwordRegisterC user" type="password" placeholder="Confirmar contraseña" required/>  </div>       
          <div className="reg_error_inner" id="reg_error_inner"></div>
          <button type="submit" className= "btn-register"> Registrar </button>
        </div>
       </form>
    </div>
    
);

export default register;