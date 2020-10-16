import React from 'react';
import Header from './Header';

const Profile = () => {

    
    return(
    <section className="form-profile">
        <Header/>
        <div className ="box-body">
            <div className="box-profile">
                <p className="title">Perfil del usuario</p>
                <div className="box-user"> <label>Nombre: </label> <input className="nombre" type="text"  required/>   </div>
                <div className="box-user"> <label>Área: </label> 
                    <select name="area" className="select-modal" required >
                    <option value="emp">Evaluación y Monitoreo de Proyectos</option>
                    <option value="ie">Informes Especiales</option>
                    <option value="iad">Innovacion y analisis de data</option>
                    </select>  
                </div>  
                <div className="box-user"> <label>Email: </label> <input className="user" type="email" required/>  </div>     
                <div className="box-user"> <label>Password: </label> <input className="user" type="password"  required/>  </div>         
                <div className="box-btn">
                <button className= "btn-guardar"> Guardar</button>
                <button className= "btn-cancelar"> Cancelar </button>
                </div>
            </div>
        </div>
    </section>
    
)};

export default Profile;