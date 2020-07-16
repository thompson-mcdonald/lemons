import styled from 'styled-components';
import breakpoints from '../../theme';
import { border, margin, padding, flexbox, width, display, height } from 'styled-system'

export const Wrap = styled.div`
  ${width}
  ${height}
  ${border}
  ${padding}
  ${margin}
  ${display}
  ${flexbox}`
  ;

  export const WrapFlex = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    @media (min-width: ${breakpoints[0]}) {
      width: 80%;
      max-width: 1240px;
    }
    ${border}
    ${padding}
    ${margin}
    ${flexbox}`
  ;

  export const Flex = styled.div`
    display: flex;
    ${flexbox}
    ${padding}
  `;