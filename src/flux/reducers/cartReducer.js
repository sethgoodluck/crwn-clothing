import { ADD_TO_CART, TOGGLE_CART_HIDDEN } from 'flux/actionTypes';

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
				cartItems: [...state.cartItems, payload]
			};

		default:
			return state;
	}
};

export default cartReducer;
