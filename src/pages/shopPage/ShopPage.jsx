import Collection from 'pages/collection';
import CollectionsOverview from 'components/collectionsOverview';
import React from 'react';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => (
	<div className='shop-page'>
		<Route path='/' component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={Collection} />
	</div>
);

export default ShopPage;
