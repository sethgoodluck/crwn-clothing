import {
	CartDropdownButton,
	CartDropdownContainer,
	CartItemsContainer,
	EmptyMessageContainer
} from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js.js';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<CartDropdownContainer>
		<CartItemsContainer>
			{cartItems.length ? (
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
			)}
		</CartItemsContainer>
		<CartDropdownButton
			onClick={() => {
				history.push('/checkout');
				dispatch(toggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</CartDropdownButton>
	</CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
