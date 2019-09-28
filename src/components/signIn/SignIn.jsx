import './SignIn.styles.scss';

import React, { useState } from 'react';

import CustomButton from 'components/customButton';
import FormInput from 'components/formInput';

const SignIn = ({ emailSignInStart, signInWithGoogle }) => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: ''
	});

	const { email, password } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = e => {
		const { value, name } = e.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					value={email}
					handleChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					name='password'
					type='password'
					value={password}
					handleChange={handleChange}
					label='Password'
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
