import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { userActions } from '../_actions';
import {
	Form,
	Title,
	Label,
	Input,
	Button,
	LoadingImage,
	Error,
} from '../theme';

const Link = styled.a`
	color: ${({ theme }) => theme.button};
	font-weight: bold;

	&:hover, &:visited, &:active, &:focus {
		color: ${({ theme }) => theme.button};
	}
`;

class Login extends React.Component {
	constructor(props) {
		super(props);

		// reset login status
		this.props.dispatch(userActions.logout());

		this.state = {
			username: '',
			password: '',
			submitted: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
		const { username, password } = this.state;
		const { dispatch } = this.props;
		if (username && password) {
			dispatch(userActions.login(username, password));
		}
	}

	render() {
		const { loggingIn } = this.props;
		const { username, password, submitted } = this.state;

		return (
			<div>
				<Form name="form">
					<Title>Login</Title>
					<Label htmlFor="username">Username</Label>
					<Input type="text" name="username" value={username} onChange={this.handleChange} />
					{submitted && !username && <Error>Username is required</Error>}
					<Label htmlFor="password">Password</Label>
					<Input type="password" name="password" value={password} onChange={this.handleChange} />
					{submitted && !password && <Error>Password is required</Error>}
					<Button onClick={this.handleSubmit}>Login</Button>
					<p>If you are not registered yet, register <Link href="/register">here</Link>.</p>
					{loggingIn && <LoadingImage />}
				</Form>
			</div>
		);
	}
}

Login.propTypes = {
	dispatch: PropTypes.func,
	loggingIn: PropTypes.bool,
};

function mapStateToProps(state) {
	const { loggingIn } = state.authentication;
	return {
		loggingIn,
	};
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };
