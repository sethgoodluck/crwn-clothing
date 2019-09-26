import { ADD_TO_CART, TOGGLE_CART_HIDDEN } from 'flux/actionTypes';

export const toggleCartHidden = () => ({
	type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
	type: ADD_TO_CART,
	payload: item
});
