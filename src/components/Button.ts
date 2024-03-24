import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  z-index: 0;
  
  position: relative;
  
  &:hover {
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${theme.colors.accent};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    transition: ${theme.animations.transition};
  }
`;