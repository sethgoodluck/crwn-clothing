import "./Directory.styles.scss";

import React, { PureComponent } from "react";

import MenuItem from "components/menuItem/MenuItem";

class Directory extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			sections: [
				{
					title: "hats",
					imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
					id: 1,
					linkUrl: "shop/hats"
				},
				{
					title: "jackets",
					imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
					id: 2,
					linkUrl: "shop/jackets"
				},
				{
					title: "sneakers",
					imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
					id: 3,
					linkUrl: "shop/sneakers"
				},
				{
					title: "womens",
					imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
					size: "large",
					id: 4,
					linkUrl: "shop/womens"
				},
				{
					title: "mens",
					imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
					size: "large",
					id: 5,
					linkUrl: "shop/mens"
				}
			]
		};
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ title, imageUrl, id, size }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

Directory.propTypes = {
	// bla: PropTypes.string,
};

Directory.defaultProps = {
	// bla: 'test',
};

export default Directory;
