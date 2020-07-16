import styled from 'styled-components';

export const YellowCTA = styled.a`
  font-size: 2rem;
  background-color: #F2D262;
  padding: 2rem;
  border-radius: 1rem;
  color: black;
  transform: scale(1);
  display: inline-block;
  transition: transform .4s, box-shadow .5s;
  &:link, &:visited {
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform .4s, box-shadow .5s;
    box-shadow: 0 4px 10px #F2D262;
  }
`;