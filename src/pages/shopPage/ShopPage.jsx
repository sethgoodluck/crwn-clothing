import CollectionPageContainer from 'pages/collection/CollectionContainer';
import CollectionsOverviewContainer from 'components/collection/collectionsOverview/CollectionsOverviewContainer';
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from 'flux/actions/shopActions';

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStart } = this.props;
		fetchCollectionsStart();
	}

	render() {
		const { match } = this.props;

		return (
			<div className='shop-page'>
				<Route exact path='/shop' component={CollectionsOverviewContainer} />
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
		);
	}
}

export default connect(
	null,
	{ fetchCollectionsStart }
)(ShopPage);
