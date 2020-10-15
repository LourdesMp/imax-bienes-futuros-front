import React from 'react';
import Header from '../Header';



const tasacion = () => (
    <section className="form-profile">
        <Header/>
        <div class ="box-body">
            <div class="box-newProject">
                <p class="title">Datos del Proyecto</p>
                <div class="box-user"> <label>Nombre: </label> <input class="nombre" type="text"  required/>   </div>
                <div class="box-user"> <label>Promotor: </label> <input class="user" type="text" required/>  </div>  
                {/* select con los bancos que se trabajan */}
                <div class="box-user"> <label>Banco: </label> 
                    <select name="area" className="select-modal" required >
                    <option value="bcp">Banco de Credito del Perú</option>
                    <option value="bbva">BBVA-Banco Continental</option>
                    <option value="bp">Banco Pichincha</option>
                    </select>  </div>     
                <div class="box-btn">
                <button class= "btn-guardar"> Guardar</button>
                <button class= "btn-cancelar"> Cancelar </button>
                </div>
            </div>
        </div>
    </section>
    
);

export default tasacion;