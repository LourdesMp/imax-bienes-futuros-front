import { types } from '../types/types';


//acciones para determinar los errores
export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
});