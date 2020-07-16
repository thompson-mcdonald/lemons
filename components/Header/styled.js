import styled from 'styled-components';
import { darkGreen } from '../Color';
import {padding} from 'styled-system';

export const HeaderWrapper = styled.header`
  display: block;
  background-color: ${darkGreen};
  font-family: Space Mono, monospace;
  font-size: calc(2vw + 0.4rem);
  a {
    color: white;
    text-decoration: none;
  }
  @media (min-width: 40em) {
    font-size: calc(1.2vw + 0.4rem);
  }
  ${padding}
`;

export const HeaderIcon = styled.a`

`;

export const Logo = styled.a`
  font-family: "GT Sectra Display Trial", serif;
  font-size: calc(4vw + 0.4rem);
  @media (min-width: 40em) {
    font-size: calc(2.4vw + 0.4rem);
  }
`;