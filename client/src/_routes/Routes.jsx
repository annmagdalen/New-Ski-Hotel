import * as React from 'react';
import { Route } from 'react-router-dom';
import { theme } from '../theme';
import {
    Home,
    Register,
    Layout,
    Login,
    Reserve,
    Reservations,
    About,
    Contact,
    Faq
} from '../Components';
import { Container } from './theme/container';
import './theme/global';

export const routes = (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route path='/reserve' component={Reserve} />
      <Route path='/reservations' component={Reservations} />
      <Route path='/about' component={ About } />
      <Route path='/contact' component={Contact} />
      <Route path='/faq' component={Faq} />
    </div>
);
