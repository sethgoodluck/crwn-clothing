import React, { PureComponent } from 'react';

import CollectionPreview from 'components/collectionPreview';
import shopData from './shopData.js';

class ShopPage extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			collections: shopData
		};

		console.log(this.state);
	}

	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
