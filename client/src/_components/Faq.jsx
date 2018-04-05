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

	> p {
		margin: 0;
		font-weight: bold;
	}

	> div {
		transform: ${props => (props.down ? '' : 'rotateX(180deg)')};
		transition: transform 0.3s ease-out;
	}
`;

const Chevron = styled.div`
	border-style: solid;
	border-width: 4px 4px 0 0;
	height: 0.5rem;
	margin: 0 1rem;
	transform: rotate(-45deg);
	width: 0.5rem;
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
						<Row onClick={() => this.toggleAnswer(index)} down={whichAnswerVisible[index]}>
							<p>{faq.question}</p>
							<div>
								<Chevron />
							</div>
						</Row>
						{whichAnswerVisible[index] && <p>{faq.answer}</p>}
					</Article>
				)}
			</FaqWrapper>
		);
	}
}
