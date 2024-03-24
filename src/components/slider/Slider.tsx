import AliceCarousel from 'react-alice-carousel'

import './../../styles/slider.css'
import 'react-alice-carousel/lib/alice-carousel.css'

import { S } from './Slider_Styles'

type SLidePropsType = {
  text: string
  userName: string
}

const Slide = (props: SLidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>@{props.userName}</S.Name>
    </S.Slide>
  )
}

const items = [
  <Slide
    text={
      "From the start of the project, through to completion, Vasily supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him. In many ways Vasily understood website needs better than we did and he complimented our vision perfectly. He's reliable, professional and easy to work with. I can’t recommend him highly enough and we look forward to continuing our working relationship together."
    }
    userName={'jovic olga'}
  />,
  <Slide
    text={
      'Vasily was very helpful and fast to respond to our inquiry to help with Wordpress website issues.  His knowledge was comprehensive.  Even better, his advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy! Thank you Vasily.'
    }
    userName={'rogachev ivan'}
  />,
  <Slide
    text={
      'Vasily is a great help creating a landing page for our shipment company. Everything we ask him to do is done quickly and efficiently, we would be lost without him.'
    }
    userName={'danilyuk oxana'}
  />,
]

export const Slider = () => (
  <S.Slider>
    <AliceCarousel items={items} mouseTracking />
  </S.Slider>
)
