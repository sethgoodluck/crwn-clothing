import Collection from 'pages/collection';
import CollectionsOverview from 'components/collection/collectionsOverview';
import React from 'react';
import { Route } from 'react-router-dom';
import WithSpinner from 'components/withSpinner';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from 'flux/actions/shopActions';
import { selectIsCollectionFetching } from 'flux/selectors/shopSelector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPagewWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match, isCollectionFetching } = this.props;

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
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching
});

export default connect(
	mapStateToProps,
	{ fetchCollectionsStartAsync }
)(ShopPage);
