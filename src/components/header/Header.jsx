import './Header.styles.scss';

import CartIcon from 'components/CartIcon';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/crown.svg';
import React from 'react';
import { auth } from 'utils/firebaseUtils.js';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
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
	</div>
);

const mapStatetoProps = state => ({
	currentUser: state.user.currentUser
});

export default connect(
	mapStatetoProps,
	{}
)(Header);
