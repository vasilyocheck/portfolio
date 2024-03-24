import { FC } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionTitle } from '@/components/SectionTitle'
import styled from 'styled-components'

export const Slogan: FC = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: lightblue;
`
