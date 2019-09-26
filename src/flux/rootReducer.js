import { combineReducers } from 'redux';
import userReducer from 'flux/reducers/userReducer';

export default combineReducers({
	user: userReducer
});
