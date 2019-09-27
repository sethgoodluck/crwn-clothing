import "./MenuItem.styles.scss";

import PropTypes from "prop-types";
import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<div
		className={`${size} menu-item`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
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
	title: "SEE INSIDE"
};

export default withRouter(MenuItem);
