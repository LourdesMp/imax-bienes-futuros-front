import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { startRegisterWithEmailPassword} from '../../store/actions/auth';
import { removeError, setError } from '../../store/actions/ui';
import img from '../../assets/logo-imax.png';
import { useForm } from '../../hooks/useForm';




const Register = () => {

  const dispatch = useDispatch();

  const {msgError} = useSelector ( state => state.uiReducer);
  console.log(msgError)
  
  const [formValues, handleInputChange] = useForm ({
    email:'',
    password:'',
    password2:''

  })

  const {email, password, password2} = formValues;

 

  const handleRegister = (e) =>{ 
    e.preventDefault();
     if (isFormValid ()){
       dispatch(startRegisterWithEmailPassword(email, password))
      console.log(email, password, password2);
      console.log('se ingresó Register');
     }  
  }

  const isFormValid = () => {
    // const notValidEmail = email.trim() !== /^[a-zA-Z][-_.a-zA-Z0-9]{5,29}@imax.com.pe$/;
    // const exRegEmail = /^[a-zA-Z][-_.a-zA-Z0-9]{5,29}@imax.com.pe$/;
    // var validEmail = new RegExp("^[a-zA-Z][-_.a-zA-Z0-9]{5,29}@imax.com.pe$");
    // var result = validEmail.slice(1, -1); 
    // console.log(validEmail)
    // console.log(result)

      if (email.trim() === '') {
        console.log(email.trim())
        dispatch ( setError ('el dominio del correo es incorrecto'));
        return false;
      }
      // else if () {
      //   dispatch ( setError ('ingrese su email'));
      //   return false;
      // }
      else if (password.trim() === '') {
        dispatch ( setError ('ingrese su password'));
        return false;
      }
      else if (password2.trim() === '') {
        dispatch ( setError ('ingrese su password nuevamente'));
        return false;
      }
      else if (password !== password2 || password.length < 6) {
        dispatch ( setError ('las contraseñas no coinciden o tienen menos de 6 caracteres'));
        return false;
      }
      dispatch ( removeError ());
      return true;
  
}

 

  return(
    <div className="form-register">
       <form className="box-register" onSubmit= {handleRegister}> 
        <img className="logo-imax" src={img} alt="logo"  />
        <div className="formulary">
            <div className={msgError ? 'box-user box-error' : 'box-user'}> <i className="user-icon fas fa-user"/> 
            <input className=  {msgError ? 'email user errors' : 'email user'}type="email" name="email"
            placeholder={msgError? 'Campo requerido' : 'Ingrese el email'} onChange={handleInputChange} value={email} /> </div>
            
            <div className={msgError ? 'box-user box-error' : 'box-user'}> <i className="user-icon fas fa-lock"/> 
            <input className= {msgError ? 'password user errors' : 'password user'} type="password" name="password"
              placeholder={msgError ? 'Campo requerido' : 'Ingrese la contraseña'} onChange={handleInputChange}  value={password}/>  </div>
            
            <div className={msgError ? 'box-user box-error' : 'box-user'}> <i className="user-icon fas fa-lock"/> 
            <input className= {msgError ? 'password2 user errors' : 'password user'} type="password" name="password2"
              placeholder={msgError ? 'Campo requerido' : 'Confirme la contraseña'}  onChange={handleInputChange} value={password2} />  </div>
              { msgError && (<span> {msgError}</span>) }
            <button type="submit" className= "btn-register"> Registrar</button>
        </div>
       </form>
    </div>
    
)};

export default Register;