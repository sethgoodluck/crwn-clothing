import './Header.styles.scss';

import CartDropdown from 'components/cartDropdown';
import CartIcon from 'components/cartIcon';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/crown.svg';
import React from 'react';
import { auth } from 'utils/firebaseUtils.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from 'flux/selectors/cartSelector';
import { selectCurrentUser } from 'flux/selectors/userSelector ';

const Header = ({ currentUser, hidden }) => (
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
				<div className='option' onClick={() => auth.signOut()}>
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

export default connect(
	mapStatetoProps,
	{}
)(Header);
