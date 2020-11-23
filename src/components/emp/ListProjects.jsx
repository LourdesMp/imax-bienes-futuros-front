import React, { useState } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getProjects } from '../../controller/projects';
import {getProject} from '../../store/actions/projectsActions';
import  {useDispatch, useSelector} from 'react-redux';

const ListProjects = ({project, setProject}) => {

    const dispatch = useDispatch();
    
    // const [project, setProject] = useState ({
    //     DataProjects : [],
    //     projectData  : {
    //         idProyecto: '',
    //         nombreProyecto: '',
    //         promotor: '',
    //         banco: 'bcp',
    //         file: '',
    //         tasacion: ''
    //     }
    // });

    const {
        isLoading,
        isSuccess,
        isError,
        data,
        error
    } = useSelector ( state => state.projectsReducer.get);
   

    // useEffect(() => {
    //     getProjects().then((resp) => setProject((prevState) => ({
    //         ...prevState,
    //         DataProjects:resp.DataProjects
    //     } )));
    // }, []);
    


    useEffect(() => {
       dispatch(getProject())
    }, [])

    useEffect(() => {
        if (isSuccess) {
          console.log(data)
        }
     }, [isSuccess])
    
    
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
                    {/* <div className="search-list">
                        <p>Buscar por Proyecto</p>
                        <div className="box-search">
                        <div className="search-input"> <label>Por Nombre: </label> <input className="nombre" type="text" /> </div>
                        <button className="btn-search">Buscar </button>
                        </div>
                    </div>  */}
                    <div className="roll-table">
                    <table className="table-list">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre del Proyecto</th>
                                <th>Promotor</th>
                                <th>Banco</th>
                                <th>Crear Tasación</th>
                                <th>Matriz de Tasaciones</th>
                                <th>Formato</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                          data.map((element) => (
                                <tr key={element.idProyecto}>
                                    <td>{element.idProyecto}</td>
                                    <td>{element.nombreProyecto}</td>
                                    <td>{element.promotor}</td>
                                    <td>{element.banco}</td>
                                    <td><Link to="/home/newtasacion"><i className="user-tasacion far fa-file-excel"></i></Link></td>
                                    <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i></td>
                                    <td><i className="user-upload fas fa-upload"></i><i className="user-down fas fa-download"></i><i className="user-remove far fa-trash-alt"></i></td>
                                </tr>
                            ))
                            // :(
                            //     <tr>
                            //         <td>No hay proyectos agregados</td>
                            //     </tr>
                            // )
                        }  
                        </tbody>
                    </table>
                        
                         </div>
                    
                    <Link className="btn-newTasacion"  to="/home/newProject">Nuevo Proyecto</Link>
                </div> 
            
            </div>
        </div>
    </section>
    
)};

export default ListProjects;