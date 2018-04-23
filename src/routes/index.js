import React from 'react';
import ReactDom from 'react-dom';
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
	return (
		<Router>
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/detail/:34">Detail</Link></li>
				</ul>
				<hr />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/detail/:id" component={Detail} />
				</Switch>
			</div>
		</Router>
	)
}

export default Basic;