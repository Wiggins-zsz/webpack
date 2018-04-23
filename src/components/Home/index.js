// @flow
import React from 'react';
import ReactDom from 'react-dom'
import ProTypes from 'prop-types';
import Form from '../Form/index.js';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.inputDom.focus();
	}

	render() {
		return (
			<div className="home">
				这是首页{<strong>首页打括号</strong>} and {this.props.msg}
				<WrapInput inputDom={el => this.inputDom = el} />
				<Form />
			</div>
		)
	}
}

const WrapInput = (props) => {
	return (
		<div>
			<InputText inputDom={props.inputDom} />
		</div>
	)
}

const InputText = (props) => {
	return (
		<div>
			<input placeholder="被引用的组件" ref={props.inputDom} />
		</div>
	)
}

Home.defaultProps = {
	msg: 'this is home page'
}

Home.propTypes = {
	msg: ProTypes.string.isRequired
}

// 类型检查发生在 defaultProps 之后，所以类型检查也会运用在defaultProps 上

export default Home;