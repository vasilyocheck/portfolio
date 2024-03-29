import { FC } from 'react'

import { Button } from '@/components/Button'
import { Link } from '@/components/Link'

import { S } from '../Works_Styles'

type WorkPropsType = {
  imgSrc: string
  text: string
  title: string
}
export const Work: FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Img alt={''} src={props.imgSrc} />
        <Button>view project</Button>
      </S.ImageWrapper>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link active={'true'}>demo</Link>
        <Link active={'false'}>code</Link>
      </S.Description>
    </S.Work>
  )
}
