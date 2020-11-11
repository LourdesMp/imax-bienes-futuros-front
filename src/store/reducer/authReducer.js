import { types } from '../../types/types';
import {
    POSTUSERS_LOADING, 
    POSTUSERS_SUCCESS, 
    POSTUSERS_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../actions/auth';

const initialState = {
    post: {
        isLoading : false,
        isSuccess : false,
        isError: false,
        data : {},
        error : null
    },
    user: {},
    login: {
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
                post: {
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
                post: {
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
                post: {
                    isLoading : false,
                    isSuccess : false,
                    isError: true,
                    data : {},
                    error : action.payload
                }
            }
        case types.login:
            return {
                ...state, 
                user: action.payload,
            }
        case types.logout:
            return {    };
        case LOGIN_LOADING:
            return {
                ...state, 
                login: {
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
                login: {
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
                login: {
                    isLoading : false,
                    isSuccess : false,
                    isError: true,
                    data : {},
                    error : action.payload
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