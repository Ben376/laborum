import { combineReducers } from 'redux';
import reducer from './reducer';
import reducerUserId from './reducerUserId';

export default combineReducers ({
    reducer, reducerUserId
});
