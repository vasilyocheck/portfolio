import { FC } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'

import { S } from './Contact_Styles'

export const Contact: FC = () => {
  return (
    <S.Contact id={'contact'}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form>
          <S.Field placeholder={'name'} />
          <S.Field placeholder={'subject'} />
          <S.Field as={'textarea'} placeholder={'your message here...'} />
          <Button type={'submit'}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contact>
  )
}
