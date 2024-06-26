import { Link } from '@/components/link'
import { TabStatusType } from '@/layout/sections/works/tab-menu/tabs-items'
import styled from 'styled-components'

type TabMenuPropsType = {
  changeFilterStatus: (value: TabStatusType) => void
  currentFilterStatus: string
  tabsItems: Array<{ status: TabStatusType; title: string }>
}

export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((item, index) => (
          <ListItem key={index}>
            <Link
              active={(props.currentFilterStatus === item.status).toString()}
              as={'button'}
              onClick={() => {
                props.changeFilterStatus(item.status)
              }}
            >
              {item.title}
            </Link>
          </ListItem>
        ))}
      </ul>
    </StyledTabMenu>
  )
}

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li``
