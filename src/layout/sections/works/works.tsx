import { useState } from 'react'

import { Container } from '@/components/container'
import { FlexWrapper } from '@/components/flex-wrapper'
import { SectionTitle } from '@/components/section-title'
import { TabMenu } from '@/layout/sections/works/tab-menu/tab-menu'
import { TabStatusType, tabsItems } from '@/layout/sections/works/tab-menu/tabs-items'
import { AnimatePresence, motion } from 'framer-motion'

import goliaf from '../../../assets/images/works/goliaf.webp'
import madam from '../../../assets/images/works/madam.webp'
import medil from '../../../assets/images/works/medil.webp'
import todolist from '../../../assets/images/works/todolist.webp'
import { Work } from './work/work'
import { S } from './works-styles'

const worksData = [
  {
    id: 1,
    imgSrc: madam,
    text: 'This app was developed using WordPress to let the owner of the shop further updates of the shop and manage the content of the website.',
    title: 'Garden Flowers Shop',
    type: 'ecommerce',
    webLink: 'https://madamroza.shop',
  },
  {
    id: 2,
    imgSrc: medil,
    text: 'This website was developed without using any library or framework. HTML + CSS + Javascript - are parts of this website recipe.',
    title: 'Food Ingredients Landing Page',
    type: 'landing',
    webLink: 'http://medil.group/',
  },
  {
    id: 3,
    imgSrc: goliaf,
    text: 'One of the customers asked to find a way to receive a complete data structured properly so that it could be quickly calculated. This is the solution.',
    title: 'Shipment Company Landing Page',
    type: 'landing',
    webLink: 'http://goliaftrans.pro',
  },
  {
    code: 'https://github.com/vasilyocheck/todolist',
    id: 4,
    imgSrc: todolist,
    text: 'The task of this project was to create classic to-do lists using Material UI library. Redux Toolkit was chosen as a state manager for this application.',
    title: 'Todolist',
    type: 'react',
    webLink: 'https://todolist-livid-one.vercel.app/',
  },
]

export const Works = () => {
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
  if (currentFilterStatus === 'ecommerce') {
    filteredWorks = worksData.filter(work => work.type === 'ecommerce')
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
                  <Work
                    code={work.code || 'https://github.com/vasilyocheck'}
                    imgSrc={work.imgSrc}
                    key={work.id}
                    text={work.text}
                    title={work.title}
                    webLink={work.webLink}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}
