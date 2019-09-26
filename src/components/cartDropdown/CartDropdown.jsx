import './CartDropdown.styles.scss';

import CartItem from 'components/CartItem';
import CustomButton from 'components/customButton';
import React from 'react';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.map(cartItem => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems
});

export default connect(
	mapStateToProps,
	{}
)(CartDropdown);
