import React, { useState } from 'react'

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about' },
  { text: 'Contact', href: '/contact' }
]
const Navbar = () => {
  const [navActive, setNavActive] = useState(null)
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <header>
      <nav className={`nav`}>
        <img src="logo.png" alt="" width={140} height={70} />

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx)
                setNavActive(false)
              }}
              key={menu.text}
            >
              <a href="/">hola</a>
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
