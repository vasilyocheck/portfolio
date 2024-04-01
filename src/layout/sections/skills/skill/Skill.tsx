import { FlexWrapper } from '@/components/FlexWrapper'
import { Icon } from '@/components/icon/Icon'

import { S } from '../skills-styles'

type SkillPropsType = {
  iconId: string
  img?: string
  title: string
}
export const Skill = (props: SkillPropsType) => {
  const { iconId, img, title } = props

  return (
    <S.Skill>
      <FlexWrapper align={'center'} direction={'column'}>
        <S.IconWrapper>
          {img && img.length > 0 ? <img alt={''} src={img} /> : <Icon iconId={iconId} />}
        </S.IconWrapper>
        <S.SkillTitle>{title}</S.SkillTitle>
      </FlexWrapper>
    </S.Skill>
  )
}
