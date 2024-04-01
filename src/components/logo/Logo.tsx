import { animateScroll as scroll } from 'react-scroll'

import { Icon } from '../icon/Icon'

export const Logo = () => {
  return (
    <a
      href={'/'}
      onClick={() => {
        scroll.scrollToTop()
      }}
    >
      <Icon iconId={'code'} />
    </a>
  )
}
