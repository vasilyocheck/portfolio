import React, { useState } from 'react'

import { Container } from '@/components/Container'
import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionTitle } from '@/components/SectionTitle'
import { AnimatePresence, motion } from 'framer-motion'

import timerImg from '../../../assets/images/works/countdown.webp'
import socialImg from '../../../assets/images/works/soc_networks.webp'
import { S } from './Works_Styles'
import { TabMenu, TabStatusType } from './tabMenu/TabMenu'
import { Work } from './work/Work'

const tabsItems: Array<{ status: TabStatusType; title: string }> = [
  {
    status: 'all',
    title: 'all',
  },
  {
    status: 'landing',
    title: 'landing page',
  },
  {
    status: 'react',
    title: 'react',
  },
  {
    status: 'spa',
    title: 'spa',
  },
]

const worksData = [
  {
    id: 1,
    imgSrc: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Social Network',
    type: 'spa',
  },
  {
    id: 2,
    imgSrc: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.',
    title: 'Timer',
    type: 'react',
  },
  {
    id: 3,
    imgSrc: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Social Network',
    type: 'spa',
  },
  {
    id: 4,
    imgSrc: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.',
    title: 'Timer',
    type: 'react',
  },
  {
    id: 5,
    imgSrc: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    title: 'Social Network',
    type: 'spa',
  },
  {
    id: 6,
    imgSrc: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.',
    title: 'Timer',
    type: 'react',
  },
]

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
  let filteredWorks = worksData

  if (currentFilterStatus === 'landing') {
    filteredWorks = worksData.filter(work => work.type === 'landing')
  }
  if (currentFilterStatus === 'react') {
    filteredWorks = worksData.filter(work => work.type === 'react')
  }
  if (currentFilterStatus === 'spa') {
    filteredWorks = worksData.filter(work => work.type === 'spa')
  }

  const changeFilterStatus = (value: TabStatusType) => {
    setCurrentFilterStatus(value)
  }

  return (
    <S.Works id={'works'}>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
          tabsItems={tabsItems}
        />
        <FlexWrapper align={'flex-start'} justify={'space-between'} wrap={'wrap'}>
          <AnimatePresence>
            {filteredWorks.map(work => {
              return (
                <motion.div
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  key={work.id}
                  layout
                  style={{ flexGrow: 1, maxWidth: '540px', width: '400px' }}
                >
                  <Work imgSrc={work.imgSrc} key={work.id} text={work.text} title={work.title} />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}
