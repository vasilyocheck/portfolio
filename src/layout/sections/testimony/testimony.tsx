import { Container } from '@/components/container'
import { FlexWrapper } from '@/components/flex-wrapper'
import { Icon } from '@/components/icon/icon'
import { SectionTitle } from '@/components/section-title'
import { Slider } from '@/components/slider/slider'
import styled from 'styled-components'

import { S } from '../skills/skills-styles'

export const Testimony = () => {
  return (
    <StyledTestimony id={'testimony'}>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper align={'center'} direction={'column'}>
          <S.IconWrapper>
            <Icon iconId={'testimony'} />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  )
}

const StyledTestimony = styled.section`
  min-height: 50vh;
  position: relative;

  ${S.IconWrapper} {
    margin: 28px 0 72px;
  }
`
