import './SignIn.styles.scss';

import React, { PureComponent } from 'react';

import CustomButton from 'components/customButton';
import FormInput from 'components/formInput';
import { signInWithGoogle } from 'firebase/firebaseUtils.js';

class SignIn extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	hadnleSubmit = e => {
		e.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='Password'
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton
							type='button'
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
