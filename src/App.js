import './App.css';

import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from 'pages/homepage';
import ShopPage from 'pages/shopPage';

function App() {
	return (
		<Fragment>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</Fragment>
	);
}

export default App;
