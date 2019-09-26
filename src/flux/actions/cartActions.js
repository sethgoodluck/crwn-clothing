import { ADD_TO_CART, CLEAR_ITEM, TOGGLE_CART_HIDDEN } from 'flux/actionTypes';

export const toggleCartHidden = () => ({
	type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
	type: ADD_TO_CART,
	payload: item
});

export const clearItemFromCart = item => ({
	type: CLEAR_ITEM,
	payload: item
});
