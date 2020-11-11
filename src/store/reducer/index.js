import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import projectsReducer from './projectsReducer';


const rootReducer = combineReducers({
    authReducer,
    uiReducer,
    projectsReducer
})

export default rootReducer;