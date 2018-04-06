import React from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { alertActions } from '../_actions';
import { history } from '../_helpers';
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

const Alert = styled.article`
	background-color: pink;
	margin-top: -1rem;
	padding: 1rem;
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
					{alert.message && <Alert><Container>{alert.message}</Container></Alert>}
					<Container>
						<Router history={history}>
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
