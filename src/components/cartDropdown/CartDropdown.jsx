import './CartDropdown.styles.scss';

import CartItem from 'components/CartItem';
import CustomButton from 'components/customButton';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from 'flux/selectors/cartSelector';

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

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default connect(
	mapStateToProps,
	{}
)(CartDropdown);
