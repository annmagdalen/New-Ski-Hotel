import styled from 'styled-components';
import { theme } from './';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  width: 20rem;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: normal;
	margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  padding: 0.625rem 0.5rem;
  margin-bottom: 1rem;

  &:focus {
    border-width: 1px;
    box-shadow: 0 0 5px lightblue;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${props => (props.ghost ? 'white' : `${theme.button}`)};
  border: ${props => (props.ghost ? `1px solid ${theme.button}` : 'none')};;
  border-radius: 5px;
  color: ${props => (props.ghost ? `${theme.button}` : 'white')};
  font-size: 1rem;
	margin: 0.25rem 0 2rem 0;
  padding: 0.5rem 1rem;
  width: max-content;
`;
