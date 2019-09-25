import './App.css';

import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/header';
import Homepage from 'pages/homepage';
import ShopPage from 'pages/shopPage';
import SignInSignUp from 'pages/signInSignUp';
import { auth } from 'firebase/firebaseUtils.js';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<Fragment>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInSignUp} />
				</Switch>
			</Fragment>
		);
	}
}

export default App;
