import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/soc_networks.webp';
import timerImg from '../../../assets/images/countdown.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Works_Styles';
import {AnimatePresence, motion} from "framer-motion"

const tabsItems: Array<{ title: string, status: TabStatusType }> = [
    {
        title: 'all',
        status: 'all'
    },
     {
        title: 'landing page',
        status: 'landing'
    },
     {
        title: 'react',
        status: 'react'
    },
     {
        title: 'spa',
        status: 'spa'
    }
]

const worksData = [
    {
        imgSrc: socialImg,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa',
        id: 1
    },
    {
        imgSrc: timerImg,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.',
        type: 'react',
        id: 2
    },
    {
        imgSrc: socialImg,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa',
        id: 3
    },
    {
        imgSrc: timerImg,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.',
        type: 'react',
        id: 4
    },
    {
        imgSrc: socialImg,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa',
        id: 5
    },
    {
        imgSrc: timerImg,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.',
        type: 'react',
        id: 6
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
    let filteredWorks = worksData;

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
        setCurrentFilterStatus(value);
    }

    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <AnimatePresence>
                        {filteredWorks.map((work) => {
                            return (
                                <motion.div style={{width: '400px', flexGrow: 1, maxWidth: '540px'}}
                                    layout={true}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={work.id}
                                >
                                    <Work imgSrc={work.imgSrc}
                                          title={work.title}
                                          text={work.text}
                                          key={work.id}
                                    />
                                </motion.div>

                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};