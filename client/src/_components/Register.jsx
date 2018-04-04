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
} from '../theme';

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
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
			<Form>
				<Title>Register</Title>
				<Label htmlFor="firstName">First Name</Label>
				<Input type="text" name="firstName"	value={user.firstName} onChange={this.handleChange} />
				{submitted && !user.firstName && <div>First Name is required</div>}
				<Label htmlFor="lastName">Last Name</Label>
				<Input type="text" name="lastName" value={user.lastName} onChange={this.handleChange} />
				{submitted && !user.lastName && <div>Last Name is required</div>}
				<Label htmlFor="username">Username</Label>
				<Input type="text" name="username" value={user.username} onChange={this.handleChange} />
				{submitted && !user.username && <div>Username is required</div>}
				<Label htmlFor="password">Password</Label>
				<Input type="password" name="password" value={user.password} onChange={this.handleChange} />
				{submitted && !user.password && <div>Password is required</div>}
				<Flex>
					<Button>Register</Button>
					{registering && <LoadingImage />}
					<Button ghost href="/login">Cancel</Button>
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
