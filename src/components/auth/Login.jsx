import React, {useState, useEffect}from 'react';
import img from '../../assets/logo-imax.png';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import  {useDispatch, useSelector} from 'react-redux';
import {startLoginEmailPassword } from '../../store/actions/auth';
import { removeError, setError } from '../../store/actions/ui';



const Login = () => {

  const dispatch = useDispatch();
  console.log(useSelector(state => state))
  const {msgError} = useSelector ( state => state.uiReducer);
  console.log(msgError)

  const [msgErr, setMsgErr] = useState(null);

  const {
    isLoading,
    isSuccess,
    isError,
    data,
    error
} = useSelector ( state => state.authReducer.user);

  useEffect(() => {
    if(error){
      switch (error.code) {
        case 'auth/wrong-password':
          setMsgErr('Contraseña incorrecta');
          break;
        case'auth/user-not-found':
          setMsgErr('Email incorrecto');
          break;
        default:
          setMsgErr('Email o contraseña incorrecta')
          break;
      }
    }
  }, [error])

  //uso del hooks que se creo, para determinar cuando se está llenando
  const [formValues, handleInputChange] = useForm ({
    emailLogin:'',
    passwordLogin:''

  })

  const {emailLogin, passwordLogin} = formValues;

  //funcion que envia los datos del formulario
  const handleLogin = (e) =>{ 
    e.preventDefault();
    if (isFormValidLogin()){
      console.log(emailLogin, passwordLogin)
      dispatch( startLoginEmailPassword(emailLogin, passwordLogin)) 
      
    }
 
  };

  //funcion que identifica los errores para que se puedan mostrar 
  const isFormValidLogin = () => {
    if (emailLogin.trim() === '') {
      dispatch( setError('ingrese su email'));
      return false;
    }
    else if (passwordLogin.trim() === '') {
      dispatch ( setError('ingrese su password'));
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
                { msgErr && (<span> {msgErr}</span>) }
                <button type="submit"className= "btn-login" > Ingresar </button>
            </div>
            <p className="p-Options">¿No tienes cuenta? <Link  to="/register">Regístrate</Link> </p>
        </form>
    </section>
    
)};

export default Login;