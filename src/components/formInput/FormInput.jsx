import './FormInput.styles.scss';

import PropTypes from 'prop-types';
import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className='group'>
		<input className='form-input' onChange={handleChange} {...otherProps} />
		{label && (
			<label
				className={`${otherProps.value.length && 'shrink'} form-input-label`}
			>
				{label}
			</label>
		)}
	</div>
);

FormInput.propTypes = {
	// bla: PropTypes.string,
};

FormInput.defaultProps = {
	// bla: 'test',
};

export default FormInput;
