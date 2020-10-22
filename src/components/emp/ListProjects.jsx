import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

const ListProjects = () => (
    <section className="form-listProjects">
        <Header/>
        <div className ="box-bodyList">
            <div className="box-listProjects">
                <div className="head-list">
                    <p className="title-list">Lista de Proyectos</p>
                    <div className="leyenda">
                        <p>Leyenda</p>
                        <div className="icon-leyenda">
                        <p><i className="user-upload fas fa-upload"/>Subir Documento</p>
                        <p><i className="user-down fas fa-download"/>Descargar Documento</p>
                        </div> 
                    </div>
                </div>
                <div className="body-list">
                    <div className="search-list">
                        <p>Buscar por Proyecto</p>
                        <div className="box-search">
                        <div className="search-input"> <label>Por Nombre: </label> <input className="nombre" type="text" /> </div>
                        <button className="btn-search">Buscar </button>
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
                            <tr>
                                <td>Nueva Primavera</td>
                                <td>Av Larco 320 Barranco - Lima</td>
                                <td>xxxxxxxxxxxx</td>
                                <td>Banco BCP</td>
                                <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i></td>
                                <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i><i className="user-remove far fa-trash-alt"></i></td>
                            </tr>
                            <tr>
                                <td>Nueva Primavera</td>
                                <td>Av Larco 320 Barranco - Lima</td>
                                <td>xxxxxxxxxxxx</td>
                                <td>Banco BCP</td>
                                <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i></td>
                                <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i><i className="user-remove far fa-trash-alt"></i></td>
                            </tr>
                            <tr>
                                <td>Nueva Primavera</td>
                                <td>Av Larco 320 Barranco - Lima</td>
                                <td>xxxxxxxxxxxx</td>
                                <td>Banco BCP</td>
                                <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i></td>
                                <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i><i className="user-remove far fa-trash-alt"></i></td>
                            </tr>
                        </tbody>
                    </table>
                    <Link className="btn-newTasacion"  to="/home/tasacion">Nueva Tasación</Link>
                </div> 
            
            </div>
        </div>
    </section>
    
);

export default ListProjects;