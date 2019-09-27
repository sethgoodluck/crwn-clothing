import {
	FETCH_COLLECTIONS_FAILURE,
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
	UPDATE_COLLECTIONS
} from 'flux/actionTypes';

const initialState = {
	collections: null,
	isFetching: false,
	errorMessage: undefined
};

const shopReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_COLLECTIONS_START:
			return {
				...state,
				isFetching: true
			};

		case FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: payload
			};

		case FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: payload
			};

		case UPDATE_COLLECTIONS:
			return {
				...state,
				collections: payload
			};

		default:
			return state;
	}
};

export default shopReducer;
