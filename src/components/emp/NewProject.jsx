import React, { useState } from 'react';
import Header from '../Header';
import { postProject } from '../../controller/projects';



const NewProject = () => {

    const [project, setProject] = useState ({
        DataProjects : [],
        projectData  : {
            idProyecto: '',
            nombreProyecto: '',
            direccion:'',
            promotor: '',
            banco: 'bcp'
        }
    });

    const [error, setError] = useState({
        idProyecto: false,
        nombreProyecto: false,
        direccion:false,
        promotor: false,
        banco: false,
      });
    
    const handleInputChange = (e) => {
        const input = e.target.name;
        const data = e.target.value;
        console.log(data);
        console.log(input);
        setProject((prevState) => ({
          ...prevState,
          projectData: {
            ...project.projectData,
            [input]: data,
          },
        }));
      };

      const handleRequestProject = () => {
        const validName = project.projectData.nombreProyecto.trim() === '';
    
        if (validName) {
          if (validName) setError((prevState) => ({ ...prevState, nombreProyecto: true }));
          else setError((prevState) => ({ ...prevState, nombreProyecto: false }));
        } else {
          const projectObj = {
            idProyecto: project.projectData.idProyecto,
            nombreProyecto: project.projectData.nombreProyecto,
            direccion: project.projectData.direccion,
            promotor: project.projectData.promotor,
            banco: project.projectData.banco,
          };
          console.log(projectObj)
          postProject(projectObj).then((resp) => {
            setProject((prevState) => ({
              ...prevState,
              DataProjects: [...project.DataProjects, resp],
            }));
          }).catch((err) => {
            setError(err);
          });
        } 
      };






    
    
    return(
    <section className="form-newProject">
        <Header/>
        <div className ="box-body">
            <div className="box-newProject">
                <p className="title">Datos del Proyecto</p>
                <div className="box-user"> 
                    <label htmlFor="input-id">ID Proyecto: </label> 
                    <input name="idProyecto" type="number" onChange={handleInputChange} 
                    defaultValue={project.projectData.idProyecto}
                     placeholder={error.idProyecto ? 'Campo requerido' : ''}
                     className={error.idProyecto ? 'nombre error' : 'nombre'}
                      required/>   
                </div>
                <div className="box-user"> 
                    <label htmlFor="input-name">Nombre: </label> 
                    <input name="nombreProyecto" type="text" onChange={handleInputChange} 
                    defaultValue={project.projectData.nombreProyecto}
                     placeholder={error.nombreProyecto ? 'Campo requerido' : ''}
                     className={error.nombreProyecto ? 'nombre error' : 'nombre'}
                      required/>   
                </div>
                <div className="box-user"> 
                    <label htmlFor="input-direccion">Dirección: </label> 
                    <input name="direccion" type="text" onChange={handleInputChange} 
                    defaultValue={project.projectData.direccion}
                     placeholder={error.direccion ? 'Campo requerido' : ''}
                     className={error.direccion ? 'nombre error' : 'nombre'}
                      required/>   
                </div>
                <div className="box-user"> 
                    <label>Promotor: </label> 
                    <input name="promotor"  type="text" onChange={handleInputChange}
                    defaultValue={project.projectData.promotor}
                    placeholder={error.promotor ? 'Campo requerido' : ''}
                    className={error.promotor ? 'promotor error' : 'promotor'}
                    required/>  
                </div>  
                <div className="box-user"> <label>Banco: </label> 
                    <select onChange={handleInputChange} className="select-modal" name="banco" 
                    defaultValue={project.projectData.banco} required >
                    <option value="bcp">Banco de Credito del Perú</option>
                    <option value="bbva">BBVA-Banco Continental</option>
                    <option value="bp">Banco Pichincha</option>
                    </select>  
                </div>     
                <div className="box-btn">
                <button className= "btn-guardar" onClick={handleRequestProject}> Guardar</button>
                <button className= "btn-cancelar"> Cancelar </button>
                </div>
            </div>
        </div>
   
    </section>
    
)};

export default NewProject;