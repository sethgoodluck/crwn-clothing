import { combineReducers } from 'module';
import userReducer from 'reduxFlow/user/userReducer';

export default combineReducers({
	user: userReducer
});
