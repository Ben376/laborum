import * as actionTypes from '../helpers/actionTypes';
import axios from 'axios';

export const fetchingDisplayData = api => {
    return dispatch => {
        fetch(api).then(res => 
            res.json()).then(res => 
                dispatch(fetchDisplaySuccess(res))).catch(error => 
                    dispatch(fetchDisplayError(error)));
    }
}

export const fetchDisplaySuccess = payload => {
    return {
        type: actionTypes.FETCH_DISPLAY,
        payload,
    }
}

export const fetchDisplayError = payload => {
    return {
        type: actionTypes.FETCH_ERROR,
        payload,
    }
}

export const getIdUser = id => {
	return function (dispatch) {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(function (res) {
				dispatch({
					type: actionTypes.GET_ID,
					payload: res.data,
				});
			})
	}
}