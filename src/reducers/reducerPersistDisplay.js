import * as actionTypes from '../helpers/actionTypes';

function persistItems(state, action) {
    let newItem = true;
    let newPersistList = state;
    newPersistList.find(x => {
        if(x.id === action.data.id) newItem = false});

        if (newItem) newPersistList.push(action.data);
      
        return newPersistList;
}

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