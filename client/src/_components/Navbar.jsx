import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from '../theme/container';

const NavWrapper = styled.nav`
	background-color: ${({ theme }) => theme.primary};
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 0;
`;

const Logo = styled.a`
	color: white;
	font-size: 1.5rem;
	font-weight: bold;
	line-height: 1.5;
	text-transform: uppercase;
`;

const Flex = styled.div`
	display: flex;
`;

const StyledLink = styled.a`
	color: white;
	font-size: 1.125rem;
	line-height: 2;
	margin-left: 3rem;
`;

class Navbar extends React.Component {
	render() {
		const { loggedIn } = this.props;

		return (
			<NavWrapper>
				<Container>
					<Row>
						<Logo href='/'>Logo</Logo>
						{loggedIn ? <StyledLink href="/login">Logout</StyledLink> :
							<Flex>
								<StyledLink href='/register'>Register</StyledLink>
								<StyledLink href='/login'>Log in</StyledLink>
							</Flex>
						}
					</Row>
				</Container>
			</NavWrapper>
		);
	}
}

Navbar.propTypes = {
	loggedIn: PropTypes.bool,
};

function mapStateToProps(state) {
	const { loggedIn } = state.authentication;
	return {
		loggedIn,
	};
}

const connectedNavbarPage = connect(mapStateToProps)(Navbar);
export { connectedNavbarPage as Navbar };
