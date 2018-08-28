import { combineReducers } from 'redux';
import reducer from './reducer';
import reducerUserId from './reducerUserId';
 import persistIdDisplay from './reducerPersistDisplay';
 
export default combineReducers ({
    reducer, reducerUserId, persistIdDisplay,
});
