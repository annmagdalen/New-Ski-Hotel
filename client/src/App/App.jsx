import React from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';

import { alertActions } from '../_actions';
import { Routing } from '../_routes';
import { Container, theme } from '../theme';
import { Navbar, Footer } from '../_components';

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
						{alert.message && <div>{alert.message}</div>}
						<Router history={createBrowserHistory()}>
							<Routing />
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
