import React from 'react'
import { Fade } from 'react-awesome-reveal'

import { Container } from '@/components/Container'
import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionTitle } from '@/components/SectionTitle'

import { S } from './Skills_Styles'
import { Skill } from './skill/Skill'

const skillsData = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    iconId: 'code',
    title: 'html5',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    iconId: 'css',
    title: 'CSS',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    iconId: 'react',
    title: 'react',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    iconId: 'typescript',
    title: 'typescript',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    iconId: 'styledComponents',
    title: 'styled components',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
    iconId: 'figma',
    title: 'figma',
  },
]

export const Skills: React.FC = () => {
  return (
    <S.Skills id={'skills'}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper justify={'space-between'} wrap={'wrap'}>
          <Fade cascade damping={0.2}>
            {skillsData.map((skill, ind) => {
              return (
                <Skill
                  description={skill.description}
                  iconId={skill.iconId}
                  key={ind}
                  title={skill.title}
                />
              )
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}
