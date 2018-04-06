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

const Field = styled.textarea`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
	height: 10rem;
  padding: 0.625rem 0.5rem;

  &:focus {
    border-width: 1px;
    box-shadow: 0 0 5px lightblue;
    outline: none;
  }
`;

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mail: {
				name: '',
				email: '',
				message: '',
			},
			submitted: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		const { mail } = this.state;
		this.setState({
			...mail,
			[name]: value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.setState({ submitted: true });
		const { mail } = this.state;
		const { dispatch } = this.props;
		if (mail.name && mail.email && mail.message) {
			dispatch(userActions.register(mail));
		}
	}

	render() {
		const { sending  } = this.props;
		const { mail, submitted } = this.state;

		return (
			<Form name="form">
				<Title>Send us a message</Title>
				<Label htmlFor="name">Your name</Label>
				<Input type="text" name="name" value={mail.name} onChange={this.handleChange} />
				{submitted && !mail.name && <Error>Name is required</Error>}
				<Label htmlFor="email">Your email address</Label>
				<Input type="email" name="email" value={mail.email} onChange={this.handleChange} />
				{submitted && !mail.email && <Error>Email address is required</Error>}
				<Label htmlFor="message">Message</Label>
				<Field type="text" name="message" value={mail.message} onChange={this.handleChange} />
				{submitted && !mail.message && <Error>Message is required</Error>}
				<Flex>
					<Button onClick={this.handleSubmit}>Send</Button>
					{sending && <LoadingImage />}
					<StyledLink to="/">Cancel</StyledLink>
				</Flex>
			</Form>
		);
	}
}

Contact.propTypes = {
	dispatch: PropTypes.func,
	sending: PropTypes.bool,
};

function mapStateToProps(state) {
	const { sending } = state.registration;
	return {
		sending,
	};
}

const connectedContactPage = connect(mapStateToProps)(Contact);
export { connectedContactPage as Contact };
