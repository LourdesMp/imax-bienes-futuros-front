import {
    GETPROJECTS_LOADING, 
    GETPROJECTS_SUCCESS, 
    GETPROJECTS_ERROR
} from '../actions/projectsActions';

const initialState = {
    get: {
        isLoading : false,
        isSuccess : false,
        isError: false,
        data : [],
        error : null
    }
};

const projectsReducer = (state=initialState, action) => {
    switch (action.type) {
        case GETPROJECTS_LOADING:
            return {
                ...state, 
                get: {
                    isLoading : true,
                    isSuccess : false,
                    isError: false,
                    data : [],
                    error : null
                }
            }
          
        case GETPROJECTS_SUCCESS:
            return{
                ...state, 
                get: {
                    isLoading : false,
                    isSuccess : true,
                    isError: false,
                    data : action.payload,
                    error : null
                }
            }
        
       
        case GETPROJECTS_ERROR:
            return{
                ...state, 
                get: {
                    isLoading : false,
                    isSuccess : false,
                    isError: true,
                    data : [],
                    error : action.payload
                }
            }
        default:
            return state
    }
};

export default projectsReducer;
