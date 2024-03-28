import { S } from './notification-styles'

type Props = {
  color: string
  text: string
}

export const Notification = ({ color, text }: Props) => {
  return <S.Notification color={color}>{text}</S.Notification>
}
