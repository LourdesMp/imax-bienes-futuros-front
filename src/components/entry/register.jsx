import React, {useState} from 'react';
import img from '../../assets/logo-imax.png';
import { useHistory } from 'react-router-dom';
import 'firebase/auth';
import { useFirebaseApp} from 'reactfire';


const Register = () => {
    const history = useHistory();
    
    const [email, setEmail] = useState ('');

    const [password, setPassword ] = useState ('');
    
    const [error, setError] = useState({
      email: false,
      password: false,
      message: '',
    });

    const firebase = useFirebaseApp(); 

    //metodo para capturar el valor de los inputs
    const submit = () => {
     
      const notValidEmail = email.trim() === '';
      const notValidPassword = password.trim() === '';
      if (notValidEmail || notValidPassword ) {
        if (notValidEmail) setError((prevState) => ({ ...prevState, email: true }));
        else setError((prevState) => ({ ...prevState, email: false }));
        if (notValidPassword) setError((prevState) => ({ ...prevState, password: true }));
        else setError((prevState) => ({ ...prevState, password: false }));
      } else {
         firebase.auth().createUserWithEmailAndPassword(email,password)
     .then(() => {
      console.log('se ingresó');
      history.push('/home');
     }).catch((error)=>{
      setError((prevState) => ({ ...prevState, message: error }));
    });

      }


    
       
    }


  return(
    <div className="form-register">
       <div className="box-register"> 
        <img className="logo-imax" src={img} alt="logo"  />
        <div className="formulary">
            <div className={error.email ? 'box-user box-error' : 'box-user'}> <i className="user-icon fas fa-user"/> 
            <input className= {error.email ? 'email user errors' : 'email user'} type="email" 
            placeholder={error.email ? 'Campo requerido' : 'Ingrese el email'} onChange={ (e)=> setEmail(e.target.value)} /> </div>
            <div className={error.password ? 'box-user box-error' : 'box-user'}> <i className="user-icon fas fa-lock"/> 
            <input className= {error.email ? 'password user errors' : 'password user'} type="password"
              placeholder={error.password ? 'Campo requerido' : 'Ingrese la contraseña'} onChange={(e) => setPassword(e.target.value)}  />  </div>
            { error.message && <span>{error.message}</span> }
            <button type="submit" onClick={submit} className= "btn-register"> Registrar</button>
        </div>
       </div>
    </div>
    
)};

export default Register;