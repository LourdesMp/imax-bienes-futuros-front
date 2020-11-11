import {db} from '../../firebase-config';
//TIPOS DE ACCIONES
export const POSTUSERS_LOADING = 'POSTUSERS_LOADING'
export const POSTUSERS_SUCCESS = 'POSTUSERS_SUCCESS'
export const POSTUSERS_ERROR = 'POSTUSERS_ERROR'

//CREACION DE ACCIONES
const postUsersLoading = () => ({type:POSTUSERS_LOADING})
const postUsersuccess= (payload) => ({type:POSTUSERS_SUCCESS, payload})
const postUsersError = (payload) => ({type:POSTUSERS_ERROR, payload})

//ACCION
export const postUsers =  ( user, email ) => async (dispatch, getState) => {
    dispatch(postUsersLoading())
    try { 
            const saveUser = db.collection('usuarios').doc(email).set({
                userUid: user.uid,
                emailUser: user.displayName
            });
            console.log(saveUser)
            dispatch(postUsersSuccess())
    } catch (error) {
        dispatch(postUsersError(error))
    }
return Promise.resolve();
}


// export const saveUser = ({ user, email }) => {
//     const db = firebase.firestore();
//     db.collection('usuarios').doc(email).set({
//       userUid: user.uid,
//       emailUser: user.displayName
     
//     });
//   };
  

  export const getUser = idEmail => firebase.firestore().collection('users').doc(idEmail);