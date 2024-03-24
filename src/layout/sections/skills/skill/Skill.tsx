import { FC } from 'react'

import { FlexWrapper } from '@/components/FlexWrapper'
import { Icon } from '@/components/icon/Icon'

import { S } from '../Skills_Styles'

type SkillPropsType = {
  description: string
  iconId: string
  title: string
}
export const Skill: FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper align={'center'} direction={'column'}>
        <S.IconWrapper>
          <Icon iconId={props.iconId} />
        </S.IconWrapper>
        <S.SkillTitle>{props.title}</S.SkillTitle>
        <S.SkillText>{props.description}</S.SkillText>
      </FlexWrapper>
    </S.Skill>
  )
}
