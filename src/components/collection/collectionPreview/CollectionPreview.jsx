import './CollectionPreview.styles.scss';

import CollectionItem from 'components/collection/collectionItem';
import { Link } from 'react-router-dom';
import React from 'react';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<Link to={`shop/${title.toLowerCase()}`} className='title'>
			{title.toUpperCase()}
		</Link>
		<div className='preview'>
			{items
				.filter((item, idx) => idx < 4)
				.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
