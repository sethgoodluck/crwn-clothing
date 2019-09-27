import './App.css';

import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Checkout from 'pages/checkout';
import Header from 'components/navbar/header';
import Homepage from 'pages/homepage';
import ShopPage from 'pages/shopPage';
import SignInSignUp from 'pages/signInSignUp';
import { checkUserSession } from 'flux/actions/userActions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from 'flux/selectors/userSelector';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { checkThisUserSession } = this.props;
		checkThisUserSession();
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
	checkThisUserSession: () => dispatch(checkUserSession())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
