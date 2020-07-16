import styled from 'styled-components';
import { color, typography, padding, margin } from 'styled-system';

export const Title = styled.h1`
  font-size: calc(2.3vw + 3rem);
  font-family: GT Eesti Pro Display Trial, sans-serif;
`;

export const HeroWrapper = styled.div`
  ${color}
  ${typography}
  ${padding}
`;

export const Content = styled.div`
  ${padding}
  ${margin}
`;