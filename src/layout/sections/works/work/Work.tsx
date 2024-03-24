import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import { S } from '../Works_Styles';

type WorkPropsType = {
    imgSrc: string,
    title: string,
    text: string

}
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Img src={props.imgSrc} alt={''}/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active={true}>demo</Link>
                <Link>code</Link>
            </S.Description>
        </S.Work>
    );
};