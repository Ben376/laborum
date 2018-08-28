import * as actionTypes from '../helpers/actionTypes';

const initialState = {
    userId: [],
    error: null,
};

const fetchIdApi = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.API_CALL_ID_REQUEST:
                return { 
                    ...state, 
                    error: null,
                };
            case actionTypes.API_CALL_ID_SUCCESS:
                return { 
                    ...state, 
                    userId: action.data, 
                };
            case actionTypes.API_CALL_ID_FAILURE:
                return { 
                    ...state, 
                    userId: null, 
                    error: action.error,
                };
            default :
                return state;
        }
};

export default fetchIdApi;