import { useState } from 'react'

import { S } from '../HeaderMenu_Styles'
import { Menu } from '../menu/Menu'

export const MobileMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <S.StyledMobileMenu>
      <S.BurgerButton isOpen={menuIsOpen.toString()} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup
        isOpen={menuIsOpen.toString()}
        onClick={() => {
          setMenuIsOpen(false)
        }}
      >
        <Menu />
      </S.MobileMenuPopup>
    </S.StyledMobileMenu>
  )
}
