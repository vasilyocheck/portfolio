import { font } from '@/styles/common'
import { theme } from '@/styles/theme'
import styled from 'styled-components'

export const SectionTitle = styled.h2`
  ${font({ family: "'Josefin Sans', sans-serif", maxSize: 36, minSize: 30, weight: 600 })};
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 90px;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 3.4375rem;
    height: 0.0625rem;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);

    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }
`
