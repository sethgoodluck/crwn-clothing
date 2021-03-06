import cartReducer from 'flux/reducers/cartReducer';
import { combineReducers } from 'redux';
import directoryReducer from 'flux/reducers/directoryReducer';
import { persistReducer } from 'redux-persist';
import shopReducer from 'flux/reducers/shopReducer';
import storage from 'redux-persist/lib/storage';
import userReducer from 'flux/reducers/userReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
