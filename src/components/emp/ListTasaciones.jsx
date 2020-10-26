import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { getTasaciones } from '../../controller/tasaciones';
import { Link } from 'react-router-dom';



const ListTasaciones = () => {

    const [tasacion, setTasacion] = useState ({
        DataTasaciones: [],
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
            DataTasaciones: resp.DataTasaciones
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
                            <label className="title-tasacion">Buscar por Tasacion: </label> 
                            <div className="search-input"> <input className="nombre" type="text" placeholder="Nombres y apellidos" /> 
                            <input className="dni" placeholder="DNI"type="text" /> </div>
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
                            tasacion.DataTasaciones.length > 0

                            ? tasacion.DataTasaciones.map((element) => (
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
                    
                         <Link className="btn-newTasacion"  to="/home/tasacion">Nueva Tasación</Link>
                    
                </div> 
        
            </div>
        </div>
    </section>
    )
};


export default ListTasaciones;