import './index.scss'
import React from 'react'
import ReactDom from 'react-dom'

class Test extends React.Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return (
			<div>
				<span>数字是{this.props.number}</span>
				{ this.props.children }
			</div>
		)
	}
}

export default Test