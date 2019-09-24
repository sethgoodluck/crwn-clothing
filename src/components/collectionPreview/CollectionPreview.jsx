import './CollectionPreview.styles.scss';

import CollectionItem from 'components/collectionItem';
import PropTypes from 'prop-types';
import React from 'react';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((item, idx) => idx < 4)
				.map(({ id, ...otherItemProps }) => (
					<CollectionItem key={id} {...otherItemProps} />
				))}
		</div>
	</div>
);

CollectionPreview.propTypes = {
	// bla: PropTypes.string,
};

CollectionPreview.defaultProps = {
	// bla: 'test',
};

export default CollectionPreview;
