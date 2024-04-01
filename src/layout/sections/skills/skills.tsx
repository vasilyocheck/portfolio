import { Fade } from 'react-awesome-reveal'

import { Container } from '@/components/container'
import { FlexWrapper } from '@/components/flex-wrapper'
import { SectionTitle } from '@/components/section-title'
import { skillsData } from '@/layout/sections/skills/data/skills-data'

import formik from '../../../assets/images/skills/formik-50-50.svg'
import matUI from '../../../assets/images/skills/material-ui-svgrepo-com.svg'
import nextjs from '../../../assets/images/skills/nextjs_50-50.svg'
import radUI from '../../../assets/images/skills/radix-ui.svg'
import reduxhf from '../../../assets/images/skills/react-hook-form-logo-only-50-50.svg'
import { Skill } from './skill/skill'
import { S } from './skills-styles'

export const Skills = () => {
  return (
    <S.Skills id={'skills'}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper justify={'space-between'} wrap={'wrap'}>
          <Fade cascade damping={0.2}>
            {skillsData.map((skill, ind) => {
              return <Skill iconId={skill.iconId} key={ind} title={skill.title} />
            })}
            <Skill iconId={''} img={radUI} key={'radui'} title={'radix ui'} />
            <Skill iconId={''} img={matUI} key={'matui'} title={'material ui'} />
            <Skill iconId={''} img={reduxhf} key={'reduxhf'} title={'redux hook form'} />
            <Skill iconId={''} img={formik} key={'formik'} title={'formik'} />
            <Skill iconId={''} img={nextjs} key={'nextjs'} title={'next js'} />
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}
