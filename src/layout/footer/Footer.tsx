import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'

const footerData = [
    {
        width: '24px',
        height: '24px',
        viewBox: '0 0 21px 21px',
        iconId: 'codewars',
        link: 'https://www.codewars.com/users/Basyok'
    },
    {
        width: '21px',
        height: '21px',
        viewBox: '0 0 21px 21px',
        iconId: 'telegram',
        link: 'https://t.me/bacek_03'
    },
    {
        width: '21px',
        height: '21px',
        viewBox: '0 0 96 96',
        iconId: 'github',
        link: 'https://github.com/vasilyocheck'
    },
    {
        width: '21px',
        height: '21px',
        viewBox: '0 0 21px 21px',
        iconId: 'linkedin',
        link: 'https://www.codewars.com/users/Basyok'
    }
];

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Vasily</S.Name>
                <S.SocialList>

                    {footerData.map((item, ind) => {
                        return (
                            <a href={item.link} target='_blank' rel='noreferrer'>
                                <S.SocialItem>
                                    <S.SocialLink>
                                        <Icon width={item.width}
                                              height={item.height}
                                              viewBox={item.viewBox}
                                              iconId={item.iconId}
                                              key={ind}
                                        />
                                    </S.SocialLink>
                                </S.SocialItem>
                            </a>

                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2023 - 2024 Vasily Medvedev, All Rights Reserved</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};