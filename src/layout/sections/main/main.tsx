import Tilt from 'react-parallax-tilt'

import { Container } from '@/components/container'
import { FlexWrapper } from '@/components/flex-wrapper'
import Typewriter from 'typewriter-effect'

import photo from '../../../assets/images/works/photo_demo.webp'
import { S } from './main-styles'

export const Main = () => {
  return (
    <S.Main id={'home'}>
      <Container>
        <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Vasily Medvedev</span>
            </S.Name>
            <S.MainTitle>
              <p>A Web Developer</p>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  strings: ['A Web Developer', 'A Frontend Developer', 'A Software Engineer'],
                }}
              />
            </S.MainTitle>
          </div>
          <Tilt>
            <S.PhotoWrapper>
              <S.Photo alt={"developer's photo"} src={photo} />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  )
}
