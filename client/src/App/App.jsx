import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_routes';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { Container, theme } from '../theme';
import { Navbar, Footer } from '../Components';

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
		history.listen(() => {
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
						<Router history={history}>
							<div>
								<PrivateRoute exact path="/" component={HomePage} />
								<Route path="/login" component={LoginPage} />
								<Route path="/register" component={RegisterPage} />
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
