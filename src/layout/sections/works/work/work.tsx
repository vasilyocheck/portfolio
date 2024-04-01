import { Button } from '@/components/button'
import { Link } from '@/components/link'

import { S } from '../works-styles'

type WorkPropsType = {
  code: string
  imgSrc: string
  text: string
  title: string
  webLink?: string
}
export const Work = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Img alt={''} src={props.imgSrc} />
        <Button>
          <Link active={''} href={props.webLink || ''} target={'_blank'}>
            view project
          </Link>
        </Button>
      </S.ImageWrapper>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link active={'true'} href={props.webLink || ''} target={'_blank'}>
          demo
        </Link>
        <Link active={'false'} href={props.code}>
          code
        </Link>
      </S.Description>
    </S.Work>
  )
}
