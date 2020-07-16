import styled from 'styled-components';
import { color, margin, typography, width } from 'styled-system';

export const CardWrapper = styled.div`
  ${color}
  ${margin}
  ${typography}
  ${width}
  position: relative;
  padding: .8rem;
  border-radius: 10px;
`;

export const SmTitle = styled.h3`
  color: #111;
  font-size: 2rem;
`;

export const Description = styled.div`

`;