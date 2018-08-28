import * as actionTypes from '../helpers/actionTypes';

const persistItems = (state, action) => {
    let noMatch = true;
    let newPersistList = [...state];
    
    newPersistList.find(item => {
        if(item.id === action.data.id) noMatch = false
    });
        if (noMatch) newPersistList.push(action.data);
        
    return newPersistList;
};

const persistIdDisplay = (state = [], action) => {
        switch (action.type) {
            case actionTypes.API_CALL_ID_SUCCESS:
                return persistItems(state, action);

            case actionTypes.API_CALL_ID_FAILURE:
                return state;

            default :
                return state;
        }
};

export default persistIdDisplay;