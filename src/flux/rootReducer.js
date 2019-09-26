import cartReducer from 'flux/reducers/cartReducer';
import { combineReducers } from 'redux';
import userReducer from 'flux/reducers/userReducer';

export default combineReducers({
	user: userReducer,
	cart: cartReducer
});
