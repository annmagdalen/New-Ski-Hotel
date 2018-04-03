import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userActions } from '../_actions';

class HomePage extends React.Component {
	componentDidMount() {
		this.props.dispatch(userActions.getAll());
	}

	handleDeleteUser(id) {
		return () => this.props.dispatch(userActions.delete(id));
	}

	render() {
		const { user, users } = this.props;
		return (
			<div className="col-md-6 col-md-offset-3">
				<h1>Hi {user.firstName}!</h1>
				<p>You are logged in with React and ASP.NET Core 2.0!!</p>
				<h3>All registered users:</h3>
				{users.loading && <em>Loading users...</em>}
				{users.error && <span className="text-danger">ERROR: {users.error}</span>}
				{users.items &&
            <ul>
            	{users.items.map((user) =>
            		<li key={user.id}>
            			{user.firstName + ' ' + user.lastName}
            			{
            				user.deleting ? <em> - Deleting...</em>
            					: user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
            						: <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
            			}
            		</li>
            	)}
            </ul>
				}
				<p>
					<Link to="/login">Logout</Link>
				</p>
			</div>
		);
	}
}

HomePage.propTypes = {
	dispatch: PropTypes.func,
	user: PropTypes.object,
	users: PropTypes.array,
};

function mapStateToProps(state) {
	const { users, authentication } = state;
	const { user } = authentication;
	return {
		user,
		users,
	};
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
