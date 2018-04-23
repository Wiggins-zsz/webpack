import React from 'react';
import ReactDom from 'react-dom';
import Basic from '../routes/index.js';

// class Base extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<Header title="这是标题" />
// 				<a href="./login.html">去登陆页</a>
// 			</div>
// 		)
// 	}
// }

ReactDom.render(<Basic />, document.getElementById('app'));