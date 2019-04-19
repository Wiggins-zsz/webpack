// @flow
import React from 'react';
import ReactDom from 'react-dom'
import ProTypes from 'prop-types';
import Form from '../Form/index.jsx';
import BlockImg from '../base/block-img/index.jsx';
import Pager from '../base/pager/index.jsx';
import Test from '../page/test/index.jsx';
import Excel from '../page/excel/index.jsx';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    Switch
} from 'react-router-dom';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			imgList: [
				{src: 'no-resume-update.png', description: '这是数据缺省图'},
				{src: 'no-talent-update.png', description: 'icon 图片'}
			]
		}

		this.handleYouKnowJS = this.handleYouKnowJS.bind(this);
		this.handleTestpromise = this.handleTestpromise.bind(this);
	}

	componentDidMount() {
		this.inputDom.focus();
		this.handleTestpromise()
		// this.handleYouKnowJS();
		// this.handleChangeImg();
	}

	handleChangeImg() {
		let imgs = ['add-mark.png', 'add.png', 'back.png', 'excel-icon', 'excel-view.png'];
		setTimeout(() =>{
			let one = Math.random()*5;
			let two = Math.random()*5;
			this.setState(prevState => {
				imgList: [
					{src: imgs[one], description: '这是数据缺省图'},
					{src: imgs[two], description: 'icon 图片'}
				]
			}, 3000)
		})
	}

	handleYouKnowJS() {
		let a = [1,2,4];
		let b = [3];
		let c = "42";
		let d = "42px";
	}

	handleTestpromise() {
		return new Promise((resolve, reject) => {
			reject(2);
		}).catch(err => {
			console.log(111);
		}).then((res) => {
			return 23;
		}).then((res) => {
			console.log(res);
		})
	}

	render() {
		return (
			<div className="home">
				这是首页{<strong>首页打括号</strong>} and {this.props.msg}
				<WrapInput inputDom={el => this.inputDom = el} />
				<Form />
				<BlockImg imgList={this.state.imgList} />
				<Pager total={100} />
				<Test />
				<Excel />
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
			<div>
				<Link to="/detail/56">去详情页</Link>
			</div>
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