import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { postProject, getLastId } from '../../controller/projects';
import {getProject} from '../../store/actions/projectsActions';
import  {useDispatch, useSelector} from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NewProject = () => {
  const history = useHistory();

  const dispatch = useDispatch();
    const [project, setProject] = useState ({
        DataProjects : [],
        projectData  : {
            idProyecto: '',
            nombreProyecto: '',
            promotor: '',
            banco: 'bcp',
            file: '',
            tasacion: ''
        }
    });

  



    // const [error, setError] = useState({
    //     idProyecto: false,
    //     nombreProyecto: false,
    //     promotor: false,
    //     banco: false,
    //     file:false,
    //     tasacion:false
    //   });
    
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

    const goListProjects = () => {
      history.push({
        pathname: "/home/proyectos"
      });
    }

      const handleRequestProject = () => {
        // const validName = project.projectData.nombreProyecto.trim() === '';
        // const validMatriz =project.projectData.matriz === '';
        // const validTasacion = project.projectData.tasacion === '';

        // if (validName ||validMatriz || validTasacion) {
        //   if (validName) setError((prevState) => ({ ...prevState, nombreProyecto: true }));
        //   else setError((prevState) => ({ ...prevState, nombreProyecto: false }));
        //   if (validMatriz) setError((prevState) => ({ ...prevState, matriz: true }));
        //   else setError((prevState) => ({ ...prevState, matriz: false }));
        //   if (validTasacion) setError((prevState) => ({ ...prevState, tasacion: true }));
        //   else setError((prevState) => ({ ...prevState, tasacion: false }));
        // } else {
          var formData = new FormData();
           formData.append('nombreProyecto',project.projectData.nombreProyecto);
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
            promotor: project.projectData.promotor,
            banco: project.projectData.banco,
            matriz: project.projectData.matriz,
            tasacion: project.projectData.tasacion
          };*/
          // console.log(projectObj)
          getLastId().then((resp)=> {
            console.log(resp.DataProjects[0])
            formData.append('idProyecto',resp.DataProjects[0].LastID);  
            postProject(formData).then((resp) => {
              setProject((prevState) => ({
                ...prevState,
                DataProjects: [...project.DataProjects, resp],
              }));
             alert ('Proyecto ingresado correctamente')
             goListProjects()
            }).catch((err) => {
              return err
            });
         // } 


          } );
        
      };

    //   useEffect(() => {
    //     getLastId().then((resp) => setProject((prevState) => ({
    //       ...prevState,
    //       projectData: {
    //         ...project.projectData,
    //         idProyecto : resp.DataProjects[0].LastID
    //       }
    //     } )));
    // }, []);

    // const {
    //   isLoading,
    //   isSuccess,
    //   isError,
    //   data,
    //   error
    // } = useSelector ( state => state.projectsReducer.get);

    // useEffect(() => {
    //   dispatch(getProject())
    //  }, [])

    // const closeModal = () => {
    //   setProject((prevState) => ({
    //     ...prevState,
    //     projectData  : {
    //       idProyecto: '',
    //       nombreProyecto: '',
    //       promotor: '',
    //       banco: 'bcp',
    //       file: '',
    //       tasacion: ''
    //   }}));
    // };
  


    
    
    return(
    <section className="form-newProject">
        <Header/>
        <div className ="box-body" >
            <div className="box-newProject">
                <p className="title">Datos del Proyecto</p>
                <div className="box-user"> 
                    <input name="idProyecto" type="hidden" onChange={handleInputChange} 
                    defaultValue={project.projectData.idProyecto}
                     placeholder='Campo requerido'
                     className= 'nombre error' 
                      required/>   
                </div>
                <div className="box-user"> 
                    <label htmlFor="input-name">Nombre: </label> 
                    <input name="nombreProyecto" type="text" onChange={handleInputChange} 
                    defaultValue={project.projectData.nombreProyecto}
                     placeholder='Campo requerido'
                     className='nombre error'
                      required/>   
                </div>
                <div className="box-user"> 
                    <label>Promotor: </label> 
                    <input name="promotor"  type="text" onChange={handleInputChange}
                    defaultValue={project.projectData.promotor}
                    placeholder='Campo requerido'
                    className='promotor error'
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
                        placeholder='Campo requerido'
                        className='data error'
                        required/>  
                   
                
                </div> 
                <div className="box-user"> 
                    <label>Tasaciones: </label> 
                    <input name="tasacion" id="tasacion" type="file" onChange={handleInputChange}
                    defaultValue={project.projectData.tasacion}
                    placeholder='Campo requerido' 
                    className='tasacion error' 
                    required/>  
                </div> 
                </form>
                <div className="box-btn">
                <button className= "btn-guardar" onClick={handleRequestProject}> Guardar</button>
                <button className= "btn-cancelar" ><Link className="btn-cancelarLink"to="/home/proyectos">Cancelar</Link>  </button>
                </div>
            </div>
        </div>
   
    </section>
    
)};

export default NewProject;