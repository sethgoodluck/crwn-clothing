import './App.css';

import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/header';
import Homepage from 'pages/homepage';
import ShopPage from 'pages/shopPage';
import SignInSignUp from 'pages/signInSignUp';

function App() {
	return (
		<Fragment>
			<Header />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInSignUp} />
			</Switch>
		</Fragment>
	);
}

export default App;
