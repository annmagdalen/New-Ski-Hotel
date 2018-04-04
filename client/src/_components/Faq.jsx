import * as React from 'react';
import styled from 'styled-components';
import { faqs } from '../_faq';

const FaqWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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
	transform: rotate(135deg);
	vertical-align: top;
	width: 0.45em;
`;

export class Faq extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isAnswerVisible: 1,
		};
	}

	toggleAnswer(index) {
		this.setState({ isAnswerVisible: index });
	}

	render() {
		const { isAnswerVisible } = this.state;

		return (
			<FaqWrapper>
				<h1>Faq</h1>
				{faqs.map((faq, index) =>
					<article key={index}>
						<Chevron onClick={() => this.toggleAnswer(index)} />
						<span>{faq.question}</span>
						{isAnswerVisible === index && <p>{faq.answer}</p>}
					</article>
				)}
			</FaqWrapper>
		);
	}
}
