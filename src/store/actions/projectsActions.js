import axios from 'axios';

//TIPOS DE ACCIONES
export const GETPROJECTS_LOADING = 'GETPROJECTS_LOADING'
export const GETPROJECTS_SUCCESS = 'GETPROJECTS_SUCCESS'
export const GETPROJECTS_ERROR = 'GETPROJECTS_ERROR'

//CREACION DE ACCIONES
const getProjectLoading = () => ({type:GETPROJECTS_LOADING})
const getProjectSuccess= (payload) => ({type:GETPROJECTS_SUCCESS, payload})
const getProjectError = (payload) => ({type:GETPROJECTS_ERROR, payload})

//ACCION
export const getProject =  () => async (dispatch, getState) => {
    dispatch(getProjectLoading())
    try {
            const projects = await axios.get('http://localhost:8000/api/v1/proyectos/list');
            dispatch(getProjectSuccess(projects.data.DataProjects))
    } catch (error) {
        dispatch(getProjectError(error))
    }
return Promise.resolve();
}


