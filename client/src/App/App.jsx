import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';

import { alertActions } from '../_actions';
import { PrivateRoute } from '../_routes';
// import { HomePage } from '../HomePage';
// import { LoginPage } from './LoginPage';
// import { RegisterPage } from './RegisterPage';
import { Container, theme } from '../theme';
import { Home, Login, Register, Navbar, Footer } from '../_components';

const Body = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	> nav, footer {
		flex-shrink: 1;
	}

	> div {
		flex: auto;
	}
`;

class App extends React.Component {
	constructor(props) {
		super(props);

		const { dispatch } = this.props;
		createBrowserHistory().listen(() => {
			// clear alert on location change
			dispatch(alertActions.clear());
		});
	}

	render() {
		const { alert } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<Body>
					<Navbar />
					<Container>
						{alert.message &&
                  <div className={`alert ${alert.type}`}>{alert.message}</div>
						}
						<Router history={createBrowserHistory()}>
							<div>
								<PrivateRoute exact path="/" component={Home} />
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
							</div>
						</Router>
					</Container>
					<Footer />
				</Body>
			</ThemeProvider>
		);
	}
}

App.propTypes = {
	dispatch: PropTypes.func,
	alert: PropTypes.object,
};

function mapStateToProps(state) {
	const { alert } = state;
	return {
		alert,
	};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
