import { theme } from '@/styles/Theme'
import styled from 'styled-components'

type NotificationProps = {
  color: string
}

const Notification = styled.p<NotificationProps>`
  color: ${props => props.color || theme.colors.font};
  font-weight: bold;
`

export const S = {
  Notification,
}
