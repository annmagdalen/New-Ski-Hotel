import styled, { css } from 'styled-components';
import { media } from './media';

const sizes = {
  xl: 1140,
  lg: 960,
  md: 720,
  sm: 540
};

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width: 100%;
  ${media.sm(css`width: ${sizes.sm}px;`)}
  ${media.md(css`width: ${sizes.md}px;`)}
  ${media.lg(css`width: ${sizes.lg}px;`)}
  ${media.xl(css`width: ${sizes.xl}px;`)}
`
