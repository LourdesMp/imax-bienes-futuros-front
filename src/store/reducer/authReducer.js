import { types } from '../../types/types';
import {
    POSTUSERS_LOADING, 
    POSTUSERS_SUCCESS, 
    POSTUSERS_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../actions/auth';

const initialState = {
    user: {
        isLoading : false,
        isSuccess : false,
        isError: false,
        data : {},
        error : null
    }
};

const authReducer = (state=initialState, action) => {
    console.log('---', action.payload)
    switch (action.type) {
        case POSTUSERS_LOADING:
            return {
                ...state, 
                user: {
                    isLoading : true,
                    isSuccess : false,
                    isError: false,
                    data : {},
                    error : null
                }
            }
          
        case POSTUSERS_SUCCESS:
            return{
                ...state, 
                user: {
                    isLoading : false,
                    isSuccess : true,
                    isError: false,
                    data : action.payload,
                    error : null
                }
            }
        
       
        case POSTUSERS_ERROR:
            return{
                ...state, 
                user: {
                    isLoading : false,
                    isSuccess : false,
                    isError: true,
                    data : {},
                    error : action.payload
                }
            }
        case LOGIN_LOADING:
            return {
                ...state, 
               user: {
                    isLoading : true,
                    isSuccess : false,
                    isError: false,
                    data : {},
                    error : null
                }
            }
            
        case LOGIN_SUCCESS:
            return{
                ...state, 
                user: {
                    isLoading : false,
                    isSuccess : true,
                    isError: false,
                    data : action.payload,
                    error : null
                }
            }
        
        
        case LOGIN_ERROR:
            return{
                ...state, 
                user: {
                    isLoading : false,
                    isSuccess : false,
                    isError: true,
                    data : {},
                    error : action.payload
                }
            }   
        case LOGOUT:
            return{
                ...state,
            user: {
                isLoading : false,
                isSuccess : false,
                isError: false,
                data : {},
                error : null
            }    
            }      
        default:
            return state
    }
};

export default authReducer;

// //funcion que recibe el estado del usuario, y depende de ello retorna informacion 
// export const authReducer = (state= {}, action) => {
//     switch (action.type) {
//         case types.login:
//             return {
//                  uid: action.payload.uid,
//                  name: action.payload.displayName
//             }
//         case types.logout:
//             return initialState;  
    
//         default:
//             return state;
//     }
//     }