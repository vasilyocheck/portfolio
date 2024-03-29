import { FlexWrapper } from '@/components/FlexWrapper'
import { Icon } from '@/components/icon/Icon'

import { S } from './Footer_Styles'

const footerData = [
  {
    height: '24px',
    iconId: 'codewars',
    link: 'https://www.codewars.com/users/Basyok',
    viewBox: '0 0 24 24',
    width: '24px',
  },
  {
    height: '21px',
    iconId: 'telegram',
    link: 'https://t.me/bacek_03',
    viewBox: '0 0 21 21',
    width: '21px',
  },
  {
    height: '21px',
    iconId: 'github',
    link: 'https://github.com/vasilyocheck',
    viewBox: '0 0 96 96',
    width: '21px',
  },
]

export const Footer = () => {
  return (
    <S.Footer>
      <FlexWrapper align={'center'} direction={'column'}>
        <S.Name>Vasily</S.Name>
        <S.SocialList>
          {footerData.map((item, ind) => {
            return (
              <S.SocialItem key={item.iconId}>
                <S.SocialLink
                  href={item.link}
                  key={item.iconId}
                  rel={'noreferrer'}
                  target={'_blank'}
                >
                  <Icon
                    height={item.height}
                    iconId={item.iconId}
                    key={ind}
                    viewBox={item.viewBox}
                    width={item.width}
                  />
                </S.SocialLink>
              </S.SocialItem>
            )
          })}
        </S.SocialList>
        <S.Copyright>© 2023 - 2024 Vasily Medvedev, All Rights Reserved</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  )
}
