import { combineReducers } from 'module';
import userReducer from 'flux/user/userReducer';

export default combineReducers({
	user: userReducer
});
