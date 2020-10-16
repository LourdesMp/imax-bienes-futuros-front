import React, {useState} from 'react';
import img from '../../assets/logo-imax.png';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import 'firebase/auth';
import { useFirebaseApp} from 'reactfire';



const Login = () => {

    const history = useHistory();
    
    const [emailLogin, setEmailLogin] = useState ('');

    const [passwordLogin, setPasswordLogin ] = useState ('');
    
    const [error, setError] = useState({
      email: false,
      password: false,
      message: '',
    });

    const firebase = useFirebaseApp(); 

    //metodo para enviar a firebase el valor de los inputs y los valide
    const sendLogin = () => {
      const notValidEmail = emailLogin.trim() === '';
      const notValidPassword = passwordLogin.trim() === '';
      if (notValidEmail || notValidPassword ) {
        if (notValidEmail) setError((prevState) => ({ ...prevState, emailLogin: true }));
        else setError((prevState) => ({ ...prevState, emailLogin: false }));
        if (notValidPassword) setError((prevState) => ({ ...prevState, passwordLogin: true }));
        else setError((prevState) => ({ ...prevState, passwordLogin: false }));
      } else {
         firebase.auth().signInWithEmailAndPassword(emailLogin,passwordLogin)
     .then(() => {
      console.log('se ingresó Login');
      history.push('/home');
     }).catch((error)=>{
      setError((prevState) => ({ ...prevState, message: error }));
    });

      }


    
       
    }
  
    return (
    <section className="login">
        <div className="logIn"> 
            <img className="logo-imax" alt="logo"  src={img}/>
            <div className="formulary" >
                <div className={error.emailLogin ? 'box-user box-error' : 'box-user'}> <i className="user-icon fas fa-user"/> 
                <input className= {error.emailLogin ? 'email user errors' : 'email user'} type="email" 
                placeholder={error.emailLogin ? 'Campo requerido' : 'Ingrese el email'} onChange={ (e)=> setEmailLogin(e.target.value)} /> </div>
                <div className={error.passwordLogin ? 'box-user box-error' : 'box-user'}> <i className="user-icon fas fa-lock"/> 
                <input className= {error.emailLogin ? 'password user errors' : 'password user'} type="password"
                placeholder={error.passwordLogin ? 'Campo requerido' : 'Ingrese la contraseña'} onChange={(e) => setPasswordLogin(e.target.value)}  />  </div>
                { error.message && <span>{error.message}</span> }
                <button type="submit"className= "btn-login" onClick={sendLogin}> Ingresar </button>
            </div>
            <p className="p-Options">¿No tienes cuenta? <Link  to="/registro">Regístrate</Link> </p>
        </div>
    </section>
    
)};

export default Login;