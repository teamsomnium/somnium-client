import React from 'react'

export default React.memo(function BurgerMenu() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="11" x2="20" y2="11" stroke="#333333" strokeWidth="2" />
      <line y1="1" x2="20" y2="1" stroke="#333333" strokeWidth="2" />
      <line y1="6" x2="20" y2="6" stroke="#333333" strokeWidth="2" />
    </svg>
  )
})
