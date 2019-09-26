import './CartDropdown.styles.scss';

import CartItem from 'components/CartItem';
import CustomButton from 'components/customButton';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from 'flux/selectors/cartSelector';
import { toggleCartHidden } from 'flux/actions/cartActions';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.length ? (
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className='empty-message'>Your Cart is Empty</span>
			)}
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					toggleCartHidden();
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(
	connect(
		mapStateToProps,
		{ toggleCartHidden }
	)(CartDropdown)
);
