import './SignInSignUp.styles.scss';

import PropTypes from 'prop-types';
import React from 'react';
import SignIn from 'components/signIn';

const SignInSignUp = props => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
	</div>
);

SignInSignUp.propTypes = {
	// bla: PropTypes.string,
};

SignInSignUp.defaultProps = {
	// bla: 'test',
};

export default SignInSignUp;
