import { injectGlobal } from 'styled-components';
import { colors } from './colors';

injectGlobal`
  html {
    font-size: 16px;
  }

  body {
    color: ${colors.text};
    font-family: 'Rubik', sans-serif;
		margin: 0;
  }

	a {
		color: inherit;
		cursor: pointer;
		text-decoration: none;
	}

  a:hover, a:visited, a:active, a:focus {
    color: white;
    text-decoration: none;
  }
`;
