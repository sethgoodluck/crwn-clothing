import './Directory.styles.scss';

import MenuItem from 'components/navbar/menuItem/MenuItem';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from 'flux/selectors/directorySelector';

const Directory = ({ sections }) => {
	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(
	mapStateToProps,
	{}
)(Directory);
