import './SignIn.styles.scss';

import React, { PureComponent } from 'react';
import { emailSignInStart, googleSignInStart } from 'flux/actions/userActions';

import CustomButton from 'components/customButton';
import FormInput from 'components/formInput';
import { connect } from 'react-redux';

class SignIn extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { emailSignInStart } = this.props;
		const { email, password } = this.state;
		emailSignInStart(email, password);
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		const { googleSignInStart } = this.props;
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
							onClick={googleSignInStart}
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

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(
	null,
	mapDispatchToProps
)(SignIn);
