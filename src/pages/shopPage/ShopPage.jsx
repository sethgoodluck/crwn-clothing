import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded
} from 'flux/selectors/shopSelector';

import Collection from 'pages/collection';
import CollectionsOverview from 'components/collection/collectionsOverview';
import React from 'react';
import { Route } from 'react-router-dom';
import WithSpinner from 'components/withSpinner';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from 'flux/actions/shopActions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPagewWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match, isCollectionFetching, isCollectionLoaded } = this.props;

		return (
			<div className='shop-page'>
				<Route
					exact
					path='/shop'
					render={props => (
						<CollectionsOverviewWithSpinner
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPagewWithSpinner
							isLoading={!isCollectionLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionLoaded: selectIsCollectionsLoaded
});

export default connect(
	mapStateToProps,
	{ fetchCollectionsStartAsync }
)(ShopPage);
