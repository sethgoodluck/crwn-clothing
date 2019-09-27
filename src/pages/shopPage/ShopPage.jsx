import {
	convertCollectionsSnapshotToMap,
	firestore
} from 'utils/firebaseUtils';

import Collection from 'pages/collection';
import CollectionsOverview from 'components/collection/collectionsOverview';
import React from 'react';
import { Route } from 'react-router-dom';
import WithSpinner from 'components/withSpinner';
import { connect } from 'react-redux';
import { updateCollections } from 'flux/actions/shopActions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPagewWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
	state = {
		loading: true
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		// // This is a traditional FETCH. It is less than ideal as the data is deeply nested
		// fetch(
		// 	'https://firestore.googleapis.com/v1/projects/crwn-db-67ddf/databases/(default)/documents/collections'
		// )
		// 	.then(response => response.json())
		// 	.then(collections => console.log(collections));

		// This is a promise chain retrieval wiith one off API calls
		collectionRef.get().then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});

		// // This is a live update stream observable style
		// this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
		// 	const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
		// 	updateCollections(collectionsMap);
		// 	this.setState({ loading: false });
		// });
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;

		return (
			<div className='shop-page'>
				<Route
					exact
					path='/shop'
					render={props => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPagewWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

export default connect(
	null,
	{ updateCollections }
)(ShopPage);
