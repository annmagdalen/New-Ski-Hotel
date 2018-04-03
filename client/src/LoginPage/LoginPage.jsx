import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { userActions } from '../_actions';

const Form = styled.form`
  border-radius: 8px;
  box-shadow: 0 0 5px ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  padding: 2rem;
  width: 20rem;
`;

const Label = styled.label`
  font-size: 1.125rem;
  font-weight: normal;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1.5rem;

  &:focus {
    border-width: 1px;
    box-shadow: 0 0 5px ${({ theme }) => theme.button};
    outline: none;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.button};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.125rem;
  padding: 0.25rem 1rem;
  width: max-content;
`;

class LoginPage extends React.Component {
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
				<h2>Login</h2>
				<Form name="form" onSubmit={this.handleSubmit}>
					<div>
						<Label htmlFor="username">Username</Label>
						<Input type="text" name="username"
							value={username} onChange={this.handleChange} />
						{submitted && !username &&
						    <div>Username is required</div>
						}
					</div>
					<div>
						<Label htmlFor="password">Password</Label>
						<Input type="password" name="password"
							value={password} onChange={this.handleChange} />
						{submitted && !password &&
                            <div>Password is required</div>
						}
					</div>
					<div>
						<Button>Login</Button>
						{loggingIn &&
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
						}
						<Link to="/register">Register</Link>
					</div>
				</Form>
			</div>
		);
	}
}

LoginPage.propTypes = {
	dispatch: PropTypes.func,
	loggingIn: PropTypes.bool,
};

function mapStateToProps(state) {
	const { loggingIn } = state.authentication;
	return {
		loggingIn,
	};
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
