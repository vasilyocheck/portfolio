import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import styled from 'styled-components'

import { Icon } from '../icon/Icon'

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false)
    })
  }, [])

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop()
          }}
        >
          <Icon height={'15'} iconId={'arrowGoToTop'} viewBox={'7 5 15 16'} width={'16'} />
        </StyledGoTopBtn>
      )}
    </>
  )
}

const StyledGoTopBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`
