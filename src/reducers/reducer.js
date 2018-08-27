import * as actionTypes from '../helpers/actionTypes';

type fetch = {
    data: Array<Object>,
    error: any,
}

const initialState = {
    data: [],
    error: null,
};

const fetchDisplay = (state: fetch = initialState, action: Object): fetch => {
    
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
            default :
                return state;
        }
};

export default fetchDisplay;