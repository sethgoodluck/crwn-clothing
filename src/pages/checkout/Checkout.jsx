import './Checkout.styles.scss';

import { selectCartItems, selectCartTotal } from 'flux/selectors/cartSelector';

import CheckoutItem from 'components/checkoutItem';
import React from 'react';
import StripeButton from 'components/stripeButton';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Checkout = ({ cartItems, total }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}

		<div className='total'>
			<span>TOTAL: ${total}</span>
		</div>
		<div className='test-warning'>
			*Please use the following test credit card for payment*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</div>
		<StripeButton price={total} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(
	mapStateToProps,
	{}
)(Checkout);
