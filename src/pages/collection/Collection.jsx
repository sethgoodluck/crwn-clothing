import './Collection.styles.scss';

import CollectionItem from 'components/collectionItem';
import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from 'flux/selectors/shopSelector';

const Collection = ({ collection }) => {
	console.log(collection);
	return (
		<div className='collection-page'>
			<h2>WEEE</h2>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(
	mapStateToProps,
	{}
)(Collection);
