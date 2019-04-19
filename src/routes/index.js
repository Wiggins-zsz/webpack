import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import './index.scss';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    Switch
} from 'react-router-dom';
import Home from '../components/Home/index.jsx'
import Detail from '../components/Detail/index.jsx';
import Audio from '../components/base/base-audio/index.jsx';
import Es6 from '../components/page/Es6/index.jsx';

const Basic = (props) => {
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
						<li><Link to="/audio">Audio</Link></li>
						<li><Link to="/es6">Es6</Link></li>
					</ul>
				</div>
				<div className="content absolute">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/detail/:id" component={Detail} />
						<Route path="/audio" component={Audio} />
						<Route path="/es6" component={Es6} />
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default connect()(Basic);