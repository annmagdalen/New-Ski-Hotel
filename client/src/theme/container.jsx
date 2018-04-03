import styled, { css } from 'styled-components';
import { media } from './media';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width: 100%;
  ${media.sm(css`width: 540px;`)}
  ${media.md(css`width: 720px;`)}
  ${media.lg(css`width: 960px;`)}
  ${media.xl(css`width: 1140px;`)}
`;
