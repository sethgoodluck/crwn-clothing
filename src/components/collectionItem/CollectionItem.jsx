import './CollectionItem.styles.scss';

import PropTypes from 'prop-types';
import React from 'react';

const CollectionItem = ({ id, name, price, imageUrl }) => (
	<div className='collection-item'>
		<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
		<div className='collection-footer'>
			<span className='name'>{name}</span>
			<span className='price'>{price}</span>
		</div>
	</div>
);

CollectionItem.propTypes = {
	// bla: PropTypes.string,
};

CollectionItem.defaultProps = {
	// bla: 'test',
};

export default CollectionItem;
