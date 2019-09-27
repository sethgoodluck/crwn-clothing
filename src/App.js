import './App.css';

import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from 'utils/firebaseUtils.js';

import Checkout from 'pages/checkout';
import Header from 'components/navbar/header';
import Homepage from 'pages/homepage';
import ShopPage from 'pages/shopPage';
import SignInSignUp from 'pages/signInSignUp';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from 'flux/selectors/userSelector';
import { setCurrentUser } from 'flux/actions/userActions';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		// this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		// 	if (userAuth) {
		// 		const userRef = await createUserProfileDocument(userAuth);

		// 		userRef.onSnapshot(snapShot => {
		// 			setCurrentUser({
		// 				currentUser: {
		// 					id: snapShot.id,
		// 					...snapShot.data()
		// 				}
		// 			});
		// 		});
		// 	} else {
		// 		setCurrentUser(userAuth);
		// 	}
		// });
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<Fragment>
				<Header />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={Checkout} />
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />
						}
					/>
				</Switch>
			</Fragment>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
