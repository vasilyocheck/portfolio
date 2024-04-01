import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FlexWrapper } from '@/components/flex-wrapper'
import { Link } from '@/components/link'
import { SectionTitle } from '@/components/section-title'
import styled from 'styled-components'

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <Button>
            <Link active={false.toString()} href={'https://t.me/bacek_03'}>
              Hire me
            </Link>
          </Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: lightblue;
`
