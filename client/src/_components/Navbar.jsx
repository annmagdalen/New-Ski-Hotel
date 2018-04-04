import * as React from 'react';
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

export class Navbar extends React.Component {
	render() {
		return (
			<NavWrapper>
				<Container>
					<Row>
						<Logo href='/'>Logo</Logo>
						<Flex>
							<StyledLink href='/register'>Register</StyledLink>
							<StyledLink href='/login'>Log in</StyledLink>
						</Flex>
					</Row>
				</Container>
			</NavWrapper>
		);
	}
}
