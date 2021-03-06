import * as React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
	background-color: ${({ theme }) => theme.primary};
	color: white;
	padding: 0.75rem 3rem 0;
	text-align: center;

	> p {
		font-size: 0.75rem;
		margin: 0;
	}
`;

const FirstRow = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 0.75rem;
	// hack to place middle link exactly above copyright line
	margin-right: 0.875rem;

	> a {
		color: white;
		font-size: 1.125rem;
		margin: 0 1.5rem;
	}
`;

export class Footer extends React.Component {
	render() {
		const date = new Date();
		const year = date.getFullYear();

		return (
			<FooterWrapper>
				<FirstRow>
					<a href={'/about'}>About</a>
					<a href={'/contact'}>Contact</a>
					<a href={'/faq'}>Faq</a>
				</FirstRow>
				<p>&copy; Ski Hotel {year}</p>
			</FooterWrapper>
		);
	}
}
