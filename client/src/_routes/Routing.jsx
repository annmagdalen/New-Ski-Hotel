import * as React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './';
import {
	Home,
	Register,
	Login,
	Faq,
	Contact,
} from '../_components';

export class Routing extends React.Component {
	render() {
		return (
			<div>
				<PrivateRoute exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/faq" component={Faq} />
				<Route exact path="/contact" component={Contact} />
			</div>
		);
	}
}
