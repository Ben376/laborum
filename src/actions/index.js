import * as actionTypes from '../helpers/actionTypes';

type action = {
  type: string,
  payload: number,
}

export const fetchRequest = (): string => {
    return { type: actionTypes.FETCH_DISPLAY_REQUEST};
  }
export const getIdUser = (id: number): action => {
    return { type: actionTypes.API_CALL_ID_REQUEST, payload: id };
  }