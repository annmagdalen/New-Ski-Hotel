import { css } from 'styled-components';

const sizes = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc: any, label: string) => {
	acc[label] = (...args: any[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
	return acc;
}, {});
