import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    Switch,
    NavLink
} from 'react-router-dom';
import Test from '../test/index.js'

const alerts = () => {
	console.log('enter list page');
}

class Detail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="home">
				<div className="header">
					<h3>这是详情页</h3>
				</div>
				<Router basename="detail" keyLength={3} getUserConfirmation={alerts()}>
					<div className="content">
						<div className="tab">
							<NavLink exact strict to="/topics" isActive={() =>false} activeStyle={{color: 'red'}} activeClassName="selected">列表</NavLink>
							<div>
								<Test />
							</div>
						</div>
						<Switch>
							<Redirect to="/ccc" from="/topics"></Redirect>
							<Route path="topics" render={() =><h5>hehehehe</h5>}></Route>
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}

const Topics = ({match}) => {
	return (
		<div>
			<div>topics list!</div>
		</div>
	)
}

export default Detail;