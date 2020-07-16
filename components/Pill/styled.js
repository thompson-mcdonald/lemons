import styled from 'styled-components';
import { color, typography, display, margin } from 'styled-system';

export const PillWrapper = styled.div`
  border-radius: 4px;
  padding: .2rem;
  font-size: calc(0.8vw + 1rem);
  ${margin}
  ${color}
  ${typography}
  ${display}
`;