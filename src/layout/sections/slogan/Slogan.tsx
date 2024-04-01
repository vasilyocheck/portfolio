import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FlexWrapper } from '@/components/FlexWrapper'
import { Link } from '@/components/Link'
import { SectionTitle } from '@/components/SectionTitle'
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
