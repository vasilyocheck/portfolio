import styled from 'styled-components'

type Notification = {
  color: string
}

const Notification = styled.p<Notification>`
  color: ${props => props.color || '#fff'};
  font-weight: bold;
`

export const S = {
  Notification,
}
