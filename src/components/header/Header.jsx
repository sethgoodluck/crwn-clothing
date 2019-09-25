import './Header.styles.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/crown.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { auth } from 'firebase/firebaseUtils.js';

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
		</div>
	</div>
);

Header.propTypes = {
	// bla: PropTypes.string,
};

Header.defaultProps = {
	// bla: 'test',
};

export default Header;
