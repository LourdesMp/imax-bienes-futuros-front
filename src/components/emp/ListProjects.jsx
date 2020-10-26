import React, { useState } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getProjects } from '../../controller/projects';

const ListProjects = () => {
    
    const [project, setProject] = useState ({
        DataProjects : [],
        projectData  : {
            idProyecto: '',
            nombreProyecto: '',
            direccion: '',
            promotor: '',
            banco: ''
        }
    });

    useEffect(() => {
        getProjects().then((resp) => setProject((prevState) => ({
            ...prevState,
            DataProjects:resp.DataProjects
        } )));
    }, []);
    
    
    return(
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
                        {
                            project.DataProjects.length > 0
                        
                            ? project.DataProjects.map((element) => (
                                <tr key={element.idProyecto}>
                                    <td>{element.nombreProyecto}</td>
                                    <td>{element.direccion}</td>
                                    <td>{element.promotor}</td>
                                    <td>{element.banco}</td>
                                    <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i></td>
                                    <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i><i className="user-remove far fa-trash-alt"></i></td>
                                </tr>
                            )):(
                                <tr>
                                    <td>No hay proyectos agregados</td>
                                </tr>
                            )
                        }  
                        </tbody>
                    </table>
                    <Link className="btn-newTasacion"  to="/home/nuevo">Nuevo Proyecto</Link>
                </div> 
            
            </div>
        </div>
    </section>
    
)};

export default ListProjects;