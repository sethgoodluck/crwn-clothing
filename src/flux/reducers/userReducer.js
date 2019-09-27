import {
	EMAIL_SIGN_IN_FAILURE,
	EMAIL_SIGN_IN_SUCCESS,
	GOOGLE_SIGN_IN_FAILURE,
	GOOGLE_SIGN_IN_START,
	GOOGLE_SIGN_IN_SUCCESS,
	SET_CURRENT_USER
} from 'flux/actionTypes';

const INITIAL_STATE = {
	currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GOOGLE_SIGN_IN_SUCCESS:
		case EMAIL_SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			};

		case GOOGLE_SIGN_IN_FAILURE:
		case EMAIL_SIGN_IN_FAILURE:
			return {
				...state,
				currentUser: action.payload
			};

		default:
			return state;
	}
};

export default userReducer;
