import * as actionTypes from '../helpers/actionTypes';

export const fetchRequest = (id) => {
    return { type: actionTypes.FETCH_DISPLAY_REQUEST};
  }
export const getIdUser = (id) => {
    return { type: actionTypes.API_CALL_ID_REQUEST, payload: id };
  }