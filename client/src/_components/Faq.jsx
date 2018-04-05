import * as React from 'react';
import styled from 'styled-components';
import { faqs } from '../_faq';

const FaqWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	article:first-of-type {
		border: none;
	}
`;

const Article = styled.article`
	border-top: 1px solid ${({theme}) => theme.border};
	width: 50%;

	> p {
		font-size: 15px;
		margin: 0 0 1.5rem;
	}
`;

const Row = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 1.5rem 0;
	width: 100%;

	> div {
		font-weight: bold;
	}
`;

const Chevron = styled.div`
	border-style: solid;
	border-width: 0.25em 0.25em 0 0;
	content: '';
	display: inline-block;
	height: 0.45em;
	left: 0.15em;
	margin: 0 1rem;
	position: relative;
	top: 0;
	transform: ${props => (props.down ? 'rotate(-45deg)' : 'rotate(135deg)')};
	vertical-align: top;
	width: 0.45em;
`;

export class Faq extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			whichAnswerVisible: Array(faqs.length).fill(false),
		};
	}

	toggleAnswer(index) {
		const isAnswerVisible = this.state.whichAnswerVisible[index];
		this.setState({
			whichAnswerVisible: this.state.whichAnswerVisible.fill(!isAnswerVisible, index, index + 1),
		});
	}

	render() {
		const { whichAnswerVisible } = this.state;

		return (
			<FaqWrapper>
				<h1>Faq</h1>
				{faqs.map((faq, index) =>
					<Article key={index}>
						<Row onClick={() => this.toggleAnswer(index)} underline={!whichAnswerVisible[index]} >
							<div>{faq.question}</div>
							<Chevron down={whichAnswerVisible[index]} />
						</Row>
						{whichAnswerVisible[index] && <p>{faq.answer}</p>}
					</Article>
				)}
			</FaqWrapper>
		);
	}
}
