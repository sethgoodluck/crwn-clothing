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

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
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
