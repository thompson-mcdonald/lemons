import styled from 'styled-components';
import { typography, margin, color } from 'styled-system';

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 3.6rem;
  ${typography}
  ${margin}
`;

export const TitleH2 = styled.h2`
  font-size: 4rem;
  line-height: 3.2rem;
  font-weight: normal;
  ${typography}
  ${margin}
`;

export const Small = styled.span`
  font-size: calc(0.8vw + 1rem);
  ${color}
`;