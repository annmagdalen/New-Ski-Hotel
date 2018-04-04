import React from 'react';
import { Link } from 'react-router-dom';
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

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledLink = styled(Link)`
	border: 1px solid  ${({theme}) => theme.button};
	border-radius: 5px;
	color: ${({theme}) => theme.button};
	margin: 1.25rem 0 2rem 0;
  padding: 0.5rem 1rem;

	&:hover, &:visited, &:active, &:focus {
		color: ${({ theme }) => theme.button};
	}
`;

class Register extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				firstName: '',
				lastName: '',
				username: '',
				password: '',
			},
			submitted: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		const { user } = this.state;
		this.setState({
			user: {
				...user,
				[name]: value,
			},
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.setState({ submitted: true });
		const { user } = this.state;
		const { dispatch } = this.props;
		if (user.firstName && user.lastName && user.username && user.password) {
			dispatch(userActions.register(user));
		}
	}

	render() {
		const { registering  } = this.props;
		const { user, submitted } = this.state;

		return (
			<Form name="form">
				<Title>Register</Title>
				<Label htmlFor="firstName">First Name</Label>
				<Input type="text" name="firstName"	value={user.firstName} onChange={this.handleChange} />
				{submitted && !user.firstName && <Error>First Name is required</Error>}
				<Label htmlFor="lastName">Last Name</Label>
				<Input type="text" name="lastName" value={user.lastName} onChange={this.handleChange} />
				{submitted && !user.lastName && <Error>Last Name is required</Error>}
				<Label htmlFor="username">Username</Label>
				<Input type="text" name="username" value={user.username} onChange={this.handleChange} />
				{submitted && !user.username && <Error>Username is required</Error>}
				<Label htmlFor="password">Password</Label>
				<Input type="password" name="password" value={user.password} onChange={this.handleChange} />
				{submitted && !user.password && <Error>Password is required</Error>}
				<Flex>
					<Button onClick={this.handleSubmit}>Register</Button>
					{registering && <LoadingImage />}
					<StyledLink to="/">Cancel</StyledLink>
				</Flex>
			</Form>
		);
	}
}

Register.propTypes = {
	dispatch: PropTypes.func,
	registering: PropTypes.bool,
};

function mapStateToProps(state) {
	const { registering } = state.registration;
	return {
		registering,
	};
}

const connectedRegisterPage = connect(mapStateToProps)(Register);
export { connectedRegisterPage as Register };
