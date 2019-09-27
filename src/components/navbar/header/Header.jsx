import './Header.styles.scss';

import CartDropdown from 'components/cart/cartDropdown';
import CartIcon from 'components/cart/cartIcon';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/crown.svg';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from 'flux/selectors/cartSelector';
import { selectCurrentUser } from 'flux/selectors/userSelector';
import { signOutStart } from 'flux/actions/userActions';

const Header = ({ currentUser, hidden, signOutStart }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link to='/shop' className='option'>
				SHOP
			</Link>
			<Link to='/contact' className='option'>
				CONTACT
			</Link>
			{currentUser ? (
				<div className='option' onClick={signOutStart}>
					SIGN OUT
				</div>
			) : (
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{!hidden && <CartDropdown />}
	</div>
);

const mapStatetoProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(Header);
