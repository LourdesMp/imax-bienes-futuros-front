import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { postProject, getLastId } from '../../controller/projects';



const NewProject = () => {

    const [project, setProject] = useState ({
        DataProjects : [],
        projectData  : {
            idProyecto: '',
            nombreProyecto: '',
            direccion:'',
            promotor: '',
            banco: 'bcp',
            file: '',
            tasacion: ''
        }
    });

  



    const [error, setError] = useState({
        idProyecto: false,
        nombreProyecto: false,
        direccion:false,
        promotor: false,
        banco: false,
        file:false,
        tasacion:false
      });
    
    const handleInputChange = (e) => {
    
        const input = e.target.name;
        const data = e.target.value;
/*
        if(input == 'matriz'){
          console.log(this.files);
        }*/
        // console.log(data);
        // console.log(input);


        setProject((prevState) => ({
          ...prevState,
          projectData: {
            ...project.projectData,
            [input]: data,
          },
        }));


      };

    // const handFile = (e) =>{
    //   const matriz = e.target.files[0];
    //   if(matriz) {

    //   }else{
    //     setError("ingrese matriz")
    //   }

    // }
     

      const handleRequestProject = () => {
        const validName = project.projectData.nombreProyecto.trim() === '';
        const validMatriz =project.projectData.matriz === '';
        const validTasacion = project.projectData.tasacion === '';

        if (validName ||validMatriz || validTasacion) {
          if (validName) setError((prevState) => ({ ...prevState, nombreProyecto: true }));
          else setError((prevState) => ({ ...prevState, nombreProyecto: false }));
          if (validMatriz) setError((prevState) => ({ ...prevState, matriz: true }));
          else setError((prevState) => ({ ...prevState, matriz: false }));
          if (validTasacion) setError((prevState) => ({ ...prevState, tasacion: true }));
          else setError((prevState) => ({ ...prevState, tasacion: false }));

          
        } else {
          var formData = new FormData();
          formData.append('idProyecto',project.projectData.idProyecto);
           formData.append('nombreProyecto',project.projectData.nombreProyecto);
           formData.append('direccion',project.projectData.direccion);
           formData.append('promotor',project.projectData.promotor);
           formData.append('banco',project.projectData.banco);
          var file = document.forms['formName']['data'].files[0];
          var file1 = document.forms['formName']['tasacion'].files[0];
          formData.append('data',file);
          formData.append('tasacion',file1);
          // formData.append('tasacion',new File(['tasacion'],project.projectData.tasacion,{
          //   type:'xls'
          // }));

          /*
          const projectObj = {
            idProyecto: project.projectData.idProyecto,
            nombreProyecto: project.projectData.nombreProyecto,
            direccion: project.projectData.direccion,
            promotor: project.projectData.promotor,
            banco: project.projectData.banco,
            matriz: project.projectData.matriz,
            tasacion: project.projectData.tasacion
          };*/
          // console.log(projectObj)
          postProject(formData).then((resp) => {
            setProject((prevState) => ({
              ...prevState,
              DataProjects: [...project.DataProjects, resp],
            }));
          }).catch((err) => {
            setError(err);
          });
        } 
      };

      // const obtenerIdProject = () => {
      //   getLastId().then((resp) =>{
      //     project.projectData.idProyecto  =  resp.DataProjects[0].LastID
      //     setProject((prevState) => ({
      //     ...prevState,
      //     projectData: {
      //       ...project.projectData,
      //       idProyecto : resp.DataProjects[0].LastID
      //     }
      //   }));
      //   });
      // }
      // obtenerIdProject();

      useEffect(() => {
        getLastId().then((resp) => setProject((prevState) => ({
          ...prevState,
          projectData: {
            ...project.projectData,
            idProyecto : resp.DataProjects[0].LastID
          }
        } )));
    }, []);



    
    
    return(
    <section className="form-newProject">
        <Header/>
        <div className ="box-body" >
            <div className="box-newProject">
                <p className="title">Datos del Proyecto</p>
                <div className="box-user"> 
                    <label htmlFor="input-id">ID Proyecto: </label> 
                    <input name="idProyecto" type="hidden" onChange={handleInputChange} 
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
                <form id="formName" enctype="multipart/form-data" >
                <div className="box-user"> 
                    <label>Matriz general: </label> 
                    
                        <input id="data" name="data"  type="file" onChange={handleInputChange}
                        defaultValue={project.projectData.file}
                        placeholder={error.matriz ? 'Campo requerido' : ''}
                        className={error.matriz ? 'data error' : 'data'}
                        required/>  
                   
                
                </div> 
                <div className="box-user"> 
                    <label>Tasaciones: </label> 
                    <input name="tasacion" id="tasacion" type="file" onChange={handleInputChange}
                    defaultValue={project.projectData.tasacion}
                    placeholder={error.tasacion ? 'Campo requerido' : ''}
                    className={error.tasacion ? 'tasacion error' : 'tasacion'}
                    required/>  
                </div> 
                </form>
                <div className="box-btn">
                <button className= "btn-guardar" onClick={handleRequestProject}> Guardar</button>
                <button className= "btn-cancelar"> Cancelar </button>
                </div>
            </div>
        </div>
   
    </section>
    
)};

export default NewProject;