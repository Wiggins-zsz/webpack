import React from 'react';
import ReactDom from 'react-dom';
import ProTypes from 'prop-types';
import './index.scss';

export default class BlockImg extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let imgList = this.props.imgList;
		let imgDom = imgList.map((item, index) => {
			return (
				<div className="img-item" key={index}>
					<img src={require('../../../assets/images/' + item.src)} />
					<span>{item.description}</span>
				</div>
			)
		})
		return (
			<div className="img-wrap">
				{ imgDom }
			</div>
		)
	}
}

BlockImg.propTypes = {
	imgList: ProTypes.array
}