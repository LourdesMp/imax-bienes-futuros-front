import React from 'react';
import img from '../../assets/logo-imax.png';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import  {useDispatch, useSelector} from 'react-redux';
import {startLoginEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';



const Login = () => {

  const dispatch = useDispatch();

  const {msgError} = useSelector ( state => state.ui);
  console.log(msgError)

  const [formValues, handleInputChange] = useForm ({
    emailLogin:'',
    passwordLogin:''

  })

  const {emailLogin, passwordLogin} = formValues;

  const handleLogin = (e) =>{ 
    e.preventDefault();
    if (isFormValidLogin()){
      console.log(emailLogin, passwordLogin)
      dispatch ( startLoginEmailPassword  (emailLogin, passwordLogin)) 
    }
 
  };

  const isFormValidLogin = () => {
    if (emailLogin.trim() === '') {
      dispatch ( setError ('ingrese su email'));
      return false;
    }
    else if (passwordLogin.trim() === '') {
      dispatch ( setError ('ingrese su password'));
      return false;
    }

    dispatch ( removeError ());
    return true;

}

    return (
    <section className="login">
        <form className="logIn" onSubmit= {handleLogin}> 
            <img className="logo-imax" alt="logo"  src={img}/>
            <div className="formulary" >
                <div className={msgError ? 'box-user box-error' : 'box-user'}> <i className="user-icon fas fa-user"/> 
                <input className= {msgError ? 'emailLogin user errors' : 'emailLogin user'} type="email" name="emailLogin"
                placeholder={msgError ? 'Campo requerido' : 'Ingrese el email'} onChange={handleInputChange} value={emailLogin} /> </div>
                <div className={msgError ? 'box-user box-error' : 'box-user'}> <i className="user-icon fas fa-lock"/> 
                <input className= {msgError ? 'password user errors' : 'password user'} type="password" name="passwordLogin"
                placeholder={msgError ? 'Campo requerido' : 'Ingrese la contraseña'} onChange={handleInputChange} value= {passwordLogin}  />  </div>
                { msgError && (<span> {msgError}</span>) }
                <button type="submit"className= "btn-login" > Ingresar </button>
            </div>
            <p className="p-Options">¿No tienes cuenta? <Link  to="/registro">Regístrate</Link> </p>
        </form>
    </section>
    
)};

export default Login;