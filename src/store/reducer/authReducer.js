import { types } from '../../types/types';

//funcion que recibe el estado del usuario, y depende de ello retorna informacion 
export const authReducer = (state= {}, action) => {
switch (action.type) {
    case types.login:
        return {
             uid: action.payload.uid,
             name: action.payload.displayName
        }
    case types.logout:
        return {    }    

    default:
        return state;
}
}