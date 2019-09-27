import { SIGN_IN_FAILURE, SIGN_IN_SUCCESS } from 'flux/actionTypes';

const INITIAL_STATE = {
	currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			};

		case SIGN_IN_FAILURE:
			return {
				...state,
				currentUser: action.payload
			};

		default:
			return state;
	}
};

export default userReducer;
