import {firebase, db} from '../../firebase-config';
import { types } from "../../types/types";


//TIPOS DE ACCIONES
export const POSTUSERS_LOADING = 'POSTUSERS_LOADING'
export const POSTUSERS_SUCCESS = 'POSTUSERS_SUCCESS'
export const POSTUSERS_ERROR = 'POSTUSERS_ERROR'

export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGOUT = 'LOGOUT'

//CREACION DE ACCIONES
const postUsersLoading = () => ({type:POSTUSERS_LOADING})
const postUsersuccess= (payload) => ({type:POSTUSERS_SUCCESS, payload})
const postUsersError = (payload) => ({type:POSTUSERS_ERROR, payload})


export const loginLoading = () => ({type:LOGIN_LOADING})
export const loginSuccess= (payload) => ({type:LOGIN_SUCCESS, payload})
export const loginError = (payload) => ({type:LOGIN_ERROR, payload})

export const logout = ()=> ({
    type: LOGOUT
});

//funcion que nos devuelve uid y name del usuario
// export const login= (payload) => ({
//     type : types.login,
//     payload
// });

  // useEffect(() => {
      
  //     firebase.auth().onAuthStateChanged( (user) => {

  //         if ( user?.uid ) {
  //             dispatch( login( user.uid, user.displayName ) );
  //             setIsLoggedIn (true);
          
  //         } else {
  //          console.log('hola');
  //          setIsLoggedIn (false);
  //         }

  //         setChecking(false);

  //     });
      
  // }, [ dispatch, setChecking, setIsLoggedIn]);


//funcion para login
export const startLoginEmailPassword = (email, password) => {
    return (dispatch ) => {
        dispatch(loginLoading())
        firebase.auth().signInWithEmailAndPassword( email, password) 
      .then( (response) => {
          const user = {
              email: response.user.email,
              uid: response.user.uid
          }
        //  user.updateProfile(user)
        console.log('response', response)
        dispatch(loginSuccess(user))
        //   dispatch(
        //       login(user)
        //   )
          
      }).catch((error)=>{
          dispatch(loginError(error))
      })
      
    }
};

//funcion que crea el usuario
export const startRegisterWithEmailPassword =( email, password) =>  async  (dispatch, getState) => {
    dispatch(postUsersLoading())
    // const user = getState().authReducer;
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password) 
        const user = {
            email: response.user.email,
            uid: response.user.uid
        }
        // const user = response.user
        const saveUser = await db.collection('usuarios').doc(email).set({
            userUid: user.uid,
            emailUser: user.email
        } );
        dispatch(postUsersuccess(user))
    } catch (error) {
        console.log(error?.response || error)
        dispatch(postUsersError(error))
    }
    return Promise.resolve();
}



//funcion para el logout, donde el disparo será asincrono
export const startLogout = () => {
    return async (dispatch) => {
       await firebase.auth().signOut();
       dispatch( logout());
    }
};

