import './MenuItem.styles.scss';

import PropTypes from 'prop-types';
import React from 'react';

const MenuItem = ({ title }) => (
	<div className='menu-item'>
		<div className='content'>
			<h1 className='title'>{title}</h1>
			<span className='subtitle'>SHOP NOW</span>
		</div>
	</div>
);

MenuItem.propTypes = {
	// bla: PropTypes.string,
	title: PropTypes.string
};

MenuItem.defaultProps = {
	title: 'SEE INSIDE'
};

export default MenuItem;
