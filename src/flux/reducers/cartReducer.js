import {
	ADD_TO_CART,
	CLEAR_CART,
	CLEAR_ITEM,
	REMOVE_ITEM,
	TOGGLE_CART_HIDDEN
} from 'flux/actionTypes';
import { addItemToCart, removeItemFromCart } from 'utils/cartUtils';

const initialState = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};

		case ADD_TO_CART:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, payload)
			};

		case REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, payload)
			};

		case CLEAR_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					cartItem => cartItem.id !== payload.id
				)
			};

		case CLEAR_CART:
			return {
				...state,
				cartItems: []
			};

		default:
			return state;
	}
};

export default cartReducer;
