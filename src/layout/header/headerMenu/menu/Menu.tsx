import { FC } from 'react'

import { S } from '../HeaderMenu_Styles'

const mainMenuItems = [
  {
    href: 'home',
    title: 'Home',
  },
  {
    href: 'skills',
    title: 'Skills',
  },
  {
    href: 'works',
    title: 'Works',
  },
  {
    href: 'testimony',
    title: 'Testimony',
  },
  {
    href: 'contact',
    title: 'Contact',
  },
]

export const Menu: FC = () => {
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
