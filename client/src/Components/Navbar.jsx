import * as React from 'react';
// import { Link, NavLink } from 'react-router-dom';
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

const Logo = styled.div`
	color: white;
	font-size: 1.5rem;
	font-weight: bold;
	text-transform: uppercase;
`;

const StyledLink = styled.div`
	color: white;
	font-size: 1.125rem;
	line-height: 2;
	margin-left: 3rem;
`;

export class Navbar extends React.Component {
	redirect(url) {
		console.log(url);
		// this.props.(`${url}`);
	}

	render() {
		return (
			<NavWrapper>
				<Container>
					<Row>
						<Logo onClick={this.redirect('/')}>Ski Hotel</Logo>
						<div>
							<StyledLink onClick={this.redirect('/register')}>Register</StyledLink>
							<StyledLink onClick={this.redirect('/login')}>Log in</StyledLink>
						</div>
					</Row>
				</Container>
			</NavWrapper>
		);
	}
}
