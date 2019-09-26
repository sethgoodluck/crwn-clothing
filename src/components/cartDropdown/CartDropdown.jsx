import './CartDropdown.styles.scss';

import CustomButton from 'components/customButton';
import React from 'react';

const CartDropdown = () => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	</div>
);

export default CartDropdown;
