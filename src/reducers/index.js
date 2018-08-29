import { combineReducers } from 'redux';
import reducerFetchDisplay from './reducerFetchDisplay';
import reducerUserId from './reducerUserId';
import persistIdDisplay from './reducerPersistDisplay';
 
export default combineReducers ({
    reducerFetchDisplay, reducerUserId, persistIdDisplay,
});
