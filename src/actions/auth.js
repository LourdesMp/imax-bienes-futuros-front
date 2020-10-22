import {firebase} from '../firebase-config';
import { types } from "../types/types";

//funcion para login
export const startLoginEmailPassword = (email, password) => {
    return (dispatch ) => {
        firebase.auth().signInWithEmailAndPassword ( email, password) 
      .then( ({user}) => {
         user.updateProfile({displayName: email})
          dispatch (
              login (user.uid, user.displayName)
          )
      })
    }
};

//funcion que crea el usuario
export const startRegisterWithEmailPassword = ( email, password) => {
  return (dispatch) =>  {
      firebase.auth().createUserWithEmailAndPassword ( email, password) 
      .then( async ({user}) => {
          await user.updateProfile({displayName: email})
          dispatch (
              login (user.uid, user.displayName)
          )
      })
  }
}

//funcion que nos devuelve uid y name del usuario
export const login= (uid, displayName) => ({
   
        type : types.login,
        payload:{
            uid,
            displayName
        }
    
});


//funcion para el logout, donde el disparo será asincrono
export const startLogout = () => {
    return async (dispatch) => {
       await firebase.auth().signOut();

       dispatch( logout());
    }
};

export const logout = ()=> ({
    type: types.logout
});