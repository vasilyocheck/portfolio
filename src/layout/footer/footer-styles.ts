import styled from 'styled-components'

import { font } from '../../styles/common'
import { theme } from '../../styles/theme'

const Footer = styled.section`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
  position: relative;
`

const Name = styled.span`
  ${font({ family: "'Josefin Sans', sans-serif", maxSize: 22, minSize: 17, weight: 700 })};
  letter-spacing: 0.1875rem;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};
  transition: ${theme.animations.transition};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  font-size: 0.75rem;
  font-weight: 400;
  text-align: center;
  opacity: 0.5;
`

export const S = {
  Copyright,
  Footer,
  Name,
  SocialItem,
  SocialLink,
  SocialList,
}
