import {
	convertCollectionsSnapshotToMap,
	firestore
} from 'utils/firebaseUtils';

import Collection from 'pages/collection';
import CollectionsOverview from 'components/collection/collectionsOverview';
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from 'flux/actions/shopActions';

class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
		});
	}

	render() {
		const { match } = this.props;

		return (
			<div className='shop-page'>
				<Route exact path='/shop' component={CollectionsOverview} />
				<Route path={`${match.path}/:collectionId`} component={Collection} />
			</div>
		);
	}
}

export default connect(
	null,
	{ updateCollections }
)(ShopPage);
