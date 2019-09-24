import './SignIn.styles.scss';

import React, { PureComponent } from 'react';

import FormInput from 'components/formInput';
import PropTypes from 'prop-types';

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
					<input type='submit' value='Submit Form' />
				</form>
			</div>
		);
	}
}

SignIn.propTypes = {
	// bla: PropTypes.string,
};

SignIn.defaultProps = {
	// bla: 'test',
};

export default SignIn;
