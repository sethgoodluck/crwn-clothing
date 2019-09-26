import './CollectionItem.styles.scss';

import CustomButton from 'components/customButton';
import React from 'react';
import { addItem } from 'flux/actions/cartActions';
import { connect } from 'react-redux';

const CollectionItem = ({ item, addItem }) => {
	const { id, name, price, imageUrl } = item;

	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton inverted onClick={() => addItem(item)}>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

export default connect(
	null,
	{ addItem }
)(CollectionItem);
