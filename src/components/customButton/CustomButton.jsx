import './CustomButton.styles.scss';

import PropTypes from 'prop-types';
import React from 'react';

const CustomButton = ({ children, ...otherProps }) => (
	<button className='custom-button' {...otherProps}>
		{children}
	</button>
);

CustomButton.propTypes = {
	// bla: PropTypes.string,
};

CustomButton.defaultProps = {
	// bla: 'test',
};

export default CustomButton;
