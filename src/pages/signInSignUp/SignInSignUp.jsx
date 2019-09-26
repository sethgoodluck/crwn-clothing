import './SignInSignUp.styles.scss';

import React from 'react';
import SignIn from 'containers/signIn';
import SignUp from 'containers/signUp';

const SignInSignUp = props => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
);

export default SignInSignUp;
