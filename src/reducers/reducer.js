import * as actionTypes from '../helpers/actionTypes'

const initialState = {
    data: [],
    error: [],
    id: '',
}

const fetchDisplay = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.FETCH_DISPLAY :
                return {
                    ...state,
                    data: action.payload,
                }
            case actionTypes.FETCH_ERROR : 
                return {
                    ...state,
                    error: action.payload,
                }
            case actionTypes.GET_ID :
                return {
                    ...state,
                    id: action.payload,
                }
            default :
                return state;
        }
}

export default fetchDisplay;