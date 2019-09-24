import './MenuItem.styles.scss';

import PropTypes from 'prop-types';
import React from 'react';

const MenuItem = ({ title, imageUrl, size }) => (
	<div className={`${size} menu-item`}>
		<div
			className='background-image'
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className='content'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<span className='subtitle'>SHOP NOW</span>
		</div>
	</div>
);

MenuItem.propTypes = {
	// bla: PropTypes.string,
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	size: PropTypes.string
};

MenuItem.defaultProps = {
	title: 'SEE INSIDE'
};

export default MenuItem;
