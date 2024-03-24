import AliceCarousel from 'react-alice-carousel'

import { Testimonials, testimonials } from '@/components/slider/testimonials'

import 'react-alice-carousel/lib/alice-carousel.css'
import './slider.css'

import { S } from './slider-styles'

const Slide = (props: Testimonials) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>@{props.userName}</S.Name>
    </S.Slide>
  )
}

export const Slider = () => {
  const items = testimonials.map(i => <Slide text={i.text} userName={i.userName} />)

  return (
    <S.Slider>
      <AliceCarousel disableButtonsControls items={items} mouseTracking />
    </S.Slider>
  )
}
