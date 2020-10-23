import React, {useState}from 'react';
import { useEffect } from 'react';
import { getTasaciones } from '../../controller/tasaciones';
import Header from '../Header';



const Tasacion = () => {
    
    const [tasacion, setTasacion] = useState ({
        allTasacion: [],
        tasacionData : {
            IdTasacion: '',
            NombreCliente: '',
            DniCliente: '',
            NombreConyugue: '',
            DniConyugue: '',
            TipodeCambio: '',
            IdProyecto: '',
            NombreProyecto: '',
            DireccionProyecto: '',
            Promotor: '',
            Banco: '',
            Departamento: '',
            Estacionamiento: '',
            ValorVenta: '',
            Moneda: '',
            ValorMetroCuadrado: '',
            ValorComercial: '',
            PorcentajeRevision: ''
        }
    });

    useEffect(() => {
        getTasaciones().then((resp) => setTasacion ((prevState) => ({
            ...prevState,
            allTasacion: resp
        })));
    }, []);





    return(
    <section className="form-profile">
        <Header/>
        <div className ="box-bodyList">
            <div className="box-tasacion">
                <div className="head-list">
                    <p className="title-list">Crear Tasación de Bien Futuro</p>
                </div>
                <div className="body-list">
                    <div className="search-list">
                        <div className="box-first">
                            <label className="title-tasacion">Datos del Cliente: </label> 
                            <div className="search-input"> <input className="nombre" type="text" placeholder="Nombres y apellidos" /> 
                            <input className="dni" placeholder="DNI"type="text" /> </div>
                        </div>
                        <div className="box-first">
                            <label className="title-tasacion">Datos del Conyugue: </label> 
                            <div className="search-input"> <input className="nombre" type="text" placeholder="Nombres y apellidos" /> 
                            <input className="dni" placeholder="DNI"type="text" /> </div>
                        </div>
                        <div className="box-cambio">
                            <label className="title-tasacion">Tipo de cambio: </label>
                            <div className="search-input">  <input className="tipo-cambio" type="text" /> </div>
                        </div>
                    </div> 
                    <div className="box-second">
                        <div className="search-input"> <label>Nombre del Proyecto: </label> <input className="nombre-p" type="text" /> </div>
                        <div className="search-input"> <label>Dirección del Proyecto: </label> <input className="direccion-p" type="text" /> </div>
                        <div className="search-input"> <label>Banco: </label> <input className="nombre" type="banco-p" /> </div>
                        <div className="search-input"> <label>Promotor: </label> <input className="nombre" type="promotor-p" /> </div>
                    </div>
                    <div className="datos-inmueble">
                        <label className="title-tasacion">Datos del Inmueble a Tasar: </label> 
                        <div className="box-second">
                            <div className="search-input"> <label>Departamentos: </label> 
                                <select name="area" className="select-modal" required >
                                    <option value="">112</option>
                                    <option value="">113</option>
                                    <option value="">114</option>
                                </select> 
                            </div>
                            <div className="search-input"> <label>Estacionamientos: </label> 
                                <select name="area" className="select-modal" required >
                                    <option value="">112</option>
                                    <option value="">113</option>
                                    <option value="">114</option>
                                </select>
                            </div>
                            <div className="search-input"> <label>Depósitos: </label> <input className="nombre" type="banco-p" /> </div>
                            <div className="search-input"> <label>Valor de Venta: </label> 
                            <input className="nombre-p" type="text" /> </div>
                            <div className="search-input"> <label>Moneda: </label> 
                            <select name="area" className="select-modal" required >
                                <option value="soles"> Soles</option>
                                <option value="dolares">Dólares</option>    
                                </select> </div>
                        </div>
                        <div className="box-second">
                            <div className="search-input"> <label>Valor m2 terreno (USD): </label> <input className="nombre-p" type="text" /> </div>
                            <div className="search-input"> <label>Valor Comercial: </label> <input className="nombre" type="text" /> </div>
                            <div className="search-input"> <label>Porcentaje de Revisión: </label> <input className="nombre" type="number" /> </div>
                        </div>
                    </div>
                    <table className="table-list">
                        <thead>
                            <tr>
                                <th>Nombre del Proyecto</th>
                                <th>Dirección</th>
                                <th>Promotor</th>
                                <th>Banco</th>
                                <th>Matriz de Tasaciones</th>
                                <th>Formato</th>
                            </tr>
                        </thead>
                          
                        <tbody>
                        { 
                            tasacion.allTasacion.length > 0

                            ? tasacion.allTasacion.map((element) => (
                                <tr key={element.IdTasacion}>
                                    <td>{element.NombreProyecto}</td>
                                    <td>{element.DireccionProyecto}</td>
                                    <td>{element.Promotor}</td>
                                    <td>{element.Banco}</td>
                                    <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i></td>
                                    <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i><i className="user-remove far fa-trash-alt"></i></td>
                                </tr>
                            )): (
                                <tr>
                                    <td>No hay proyectos agregados</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="box-btn"> 
                        <button className="btn-guardarT">Guardar Tasacion </button>
                        <button className="btn-cancelar">Cancelar</button>
                    </div>
                </div> 
        
            </div>
        </div>
    </section>
    
)};

export default Tasacion;