import { combineReducers } from 'module';
import userReducer from './node_modules/redux/user/userReducer';

export default combineReducers({
	user: userReducer
});
