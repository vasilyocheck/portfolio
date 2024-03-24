import { FC } from 'react'

import { S } from '../HeaderMenu_Styles'
import { Menu } from '../menu/Menu'

export const DesktopMenu: FC = () => {
  return (
    <S.DesktopMenu>
      <Menu />
    </S.DesktopMenu>
  )
}
