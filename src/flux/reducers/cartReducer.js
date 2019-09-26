import { TOGGLE_CART_HIDDEN } from 'flux/actionTypes';

const initialState = {
	hidden: true
};

const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};

		default:
			return state;
	}
};

export default cartReducer;