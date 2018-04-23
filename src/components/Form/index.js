// @flow
import './index.scss'
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.submit = this.submit.bind(this);
	}

	submit(event) {
		let height = this.height.value;
		let weight = this.weight.value;
		console.log(height + weight)
		event.preventDefault();
	}

	render() {
		return (
			<div className="from">
				<form onSubmit={this.submit}>
					<fieldset>
						<legend>表单信息:</legend>
						身高：<input defaultValue="122" type="text" ref={el => this.height = el} />
						体重：<input type="text" ref={el => this.weight = el} />
						<input type="submit" value="提交" />
					</fieldset>
				</form>
			</div>
		)
	}
}

// Form.PropTypes = {

// }

export default Form;
