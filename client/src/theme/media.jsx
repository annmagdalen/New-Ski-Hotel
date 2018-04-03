import { css } from 'styled-components';

const sizes = {
	xl: 1200,
	lg: 992,
	md: 768,
	sm: 576,
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
