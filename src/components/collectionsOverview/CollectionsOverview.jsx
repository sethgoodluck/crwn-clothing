import './CollectionsOverview.styles.scss';

import CollectionPreview from 'components/collectionPreview';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from 'flux/selectors/shopSelector';

const CollectionsOverview = ({ collections }) => (
	<div className='collections-overview'>
		{' '}
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
});

export default connect(
	mapStateToProps,
	{}
)(CollectionsOverview);
