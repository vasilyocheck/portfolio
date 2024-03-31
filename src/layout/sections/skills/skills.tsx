import { FC } from 'react'
import { Fade } from 'react-awesome-reveal'

import { Container } from '@/components/Container'
import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionTitle } from '@/components/SectionTitle'
import { skillsData } from '@/layout/sections/skills/data/skills-data'

import formik from '../../../assets/images/formik-50-50.svg'
import matUI from '../../../assets/images/material-ui-svgrepo-com.svg'
import nextjs from '../../../assets/images/nextjs_50-50.svg'
import radUI from '../../../assets/images/radix-ui.svg'
import reduxhf from '../../../assets/images/react-hook-form-logo-only-50-50.svg'
import { Skill } from './skill/Skill'
import { S } from './skills-styles'

export const Skills: FC = () => {
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
            <Skill description={''} iconId={''} img={radUI} key={'radui'} title={'radix ui'} />
            <Skill description={''} iconId={''} img={matUI} key={'matui'} title={'material ui'} />
            <Skill
              description={''}
              iconId={''}
              img={reduxhf}
              key={'reduxhf'}
              title={'redux hook form'}
            />
            <Skill description={''} iconId={''} img={formik} key={'formik'} title={'formik'} />
            <Skill description={''} iconId={''} img={nextjs} key={'nextjs'} title={'next js'} />
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}
