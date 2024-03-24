import { styled } from 'styled-components'

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
`

const Text = styled.p``

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  display: inline-block;
  margin: 22px 0 32px;
`

/*const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 3.5px;

    & + span {
      margin-left: 5px;
    }

    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
      height: 7px;
      border-radius: 3.5px;
    }
  }
`*/

export const S = {
  Name,
  /*Pagination,*/
  Slide,
  Slider,
  Text,
}
