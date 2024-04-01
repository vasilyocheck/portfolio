import { theme } from '@/styles/theme'
import styled, { css } from 'styled-components'

export const Link = styled.a<{ active: string }>`
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  padding: 10px;

  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.colors.accent};
    height: 0;
    z-index: -1;

    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;

    ${props =>
      props.active === 'true' &&
      css<{ active: string }>`
        height: 10px;
      `};

    transition: ${theme.animations.transition};
  }
`
