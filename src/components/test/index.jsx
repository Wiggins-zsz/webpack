import './index.scss'
import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { ADD, SUB, MUTI,  requestData} from '../../redux/action.js'

class Test extends React.Component {
	constructor(props) {
		super(props)

		this.addOne = this.addOne.bind(this);
		this.getData = this.getData.bind(this);
	}

	addOne() {
		this.props.muti();
	}
	getData() {
		this.props.dispatch(requestData());
	}

	render() {
		return (
			<div>
				<span>数字是:{this.props.mutiCount}</span>
				<button onClick={this.addOne}>乘{this.props.base}</button>
				{
					this.props.isFeting ? 
					<span>获取数据中。。。</span>
					: <span>没有获取数据</span>
				}
				<p onClick={this.getData}>异步获取数据</p>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	let { number, base } = state.muti;
	let { isFeting, data } = state.getData;
	return {
		mutiCount: number,
		base: base,
		isFeting: isFeting,
		data: data
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		muti(){ dispatch({type: MUTI}) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)