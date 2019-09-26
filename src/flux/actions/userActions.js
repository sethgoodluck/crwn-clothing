import { SET_CURRENT_USER } from 'flux/actionConsants';

export const setCurrentUser = user => ({
	type: SET_CURRENT_USER,
	payload: user
});
