import { mainMenuItems } from '@/layout/header/headerMenu/data/main-menu-items'

import { S } from '../HeaderMenu_Styles'

export const Menu = () => {
  return (
    <ul>
      {mainMenuItems.map((item, index) => (
        <S.MenuItem key={index}>
          <S.NavLink activeClass={'active'} offset={-2} smooth spy to={item.href}>
            {item.title}
            <S.Mask>
              <span>{item.title}</span>
            </S.Mask>
            <S.Mask>
              <span>{item.title}</span>
            </S.Mask>
          </S.NavLink>
        </S.MenuItem>
      ))}
    </ul>
  )
}
