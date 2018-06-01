import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    Switch
} from 'react-router-dom';
import Home from '../components/Home/index.js'
import Detail from '../components/Detail/index.js';

const Basic = () => {
	const confirms = () => {
		console.log('location.href:', location.href);
	}
	return (
		<Router getUserConfirmation={confirms()}>
			<div className="page">
				<div className="menu absolute">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/detail/34">Detail</Link></li>
					</ul>
				</div>
				<div className="content absolute">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/detail/:id" component={Detail} />
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default Basic;