import * as actionTypes from '../helpers/actionTypes'

const initialState = {
    data: [],
    userId: [],
    fetching: false,
    error: null,
}

const fetchDisplay = (state = initialState, action) => {
    
        switch (action.type) {
            case actionTypes.FETCH_DISPLAY :
                return {
                    ...state,
                    data: action.data,
                }
            case actionTypes.FETCH_ERROR : 
                return {
                    ...state,
                    error: action.payload,
                }
            case actionTypes.API_CALL_ID_REQUEST:
                return { 
                    ...state, 
                    fetching: true, 
                    error: null,
                };
            case actionTypes.API_CALL_ID_SUCCESS:
                return { 
                    ...state, 
                    fetching: false, 
                    userId: action.data, 
                };
            case actionTypes.API_CALL_ID_FAILURE:
                return { 
                    ...state, 
                    fetching: false, 
                    userId: null, 
                    error: action.error,
                };
            default :
                return state;
        }
}

export default fetchDisplay;