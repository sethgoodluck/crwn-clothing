import './SignInSignUp.styles.scss';

import React from 'react';
import SignIn from 'components/signIn';
import SignUp from 'components/signUp';

const SignInSignUp = props => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
);

export default SignInSignUp;
