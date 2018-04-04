import * as React from 'react';
import { Route } from 'react-router-dom';
import {
	Home,
	Register,
	Login,
	About,
	Contact,
	Faq,
} from '../_components';

export const routes = (
	<div>
		<Route exact path='/' component={Home} />
		<Route exact path='/register' component={Register} />
		<Route exact path='/login' component={Login} />
		<Route path='/about' component={ About } />
		<Route path='/contact' component={Contact} />
		<Route path='/faq' component={Faq} />
	</div>
);
