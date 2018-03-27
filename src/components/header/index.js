import React from 'react'
import ReactDom from 'react-dom'
import './index.scss'

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mas: 'title'
		}
	}

	render() {
		return (
			<div>
				<div className="header">
					<span className="header-text">{this.props.title}</span>
				</div>
			</div>
		)
	}
}

export default Header;