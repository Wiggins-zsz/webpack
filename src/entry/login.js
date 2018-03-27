import React from 'react'
import ReactDom from 'react-dom'

import Header from '../components/header/index.js'
import Test from '../components/test/index.js'

class Base extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			number: 1
		}
	}

	componentDidMount() {
		setInterval(() =>{
			this.setState({
				number: this.state.number + 1
			})
		}, 1000)
	}

	render() {
		return (
			<div>
				<Header title="这是关于我们的标题页" />
				<Test number={this.state.number}>
					<div>这是children 内容</div>
				</Test>
				<a href="./index.html">去首页</a>
			</div>
		)
	}
}

ReactDom.render(<Base />, document.getElementById('app'));